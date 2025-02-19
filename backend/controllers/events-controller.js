const PostEvents = require("../models/PostEvent");
const Students = require("../models/Student");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    });
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

exports.postEvent = async (req, res) => {
    try {
        const { eventDate, category, description, email } = req.body;
        const event = await PostEvents.create({ email, dates: eventDate, category, description });

        const emailSubject = "New Event Posted!";
        const emailHtml = `
            <p>An event has been posted:</p>
            <p>Date: ${eventDate}</p>
            <p>Category: ${category}</p>
            <p>Description: ${description}</p>
        `;

        const students = await Students.find({});
        const emails = students.map(student => student.email);

        for (const recipient of emails) {
            await sendEmail(recipient, emailSubject, emailHtml);
        }
    
        res.json({ success: true, message: "Successfully posted event" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await PostEvents.find();
        res.json(allPosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
