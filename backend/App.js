require('dotenv').config()
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
// app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL).then(()=>{
console.log("connected to db");
}).catch((err)=>{
  console.log(err);
});
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const StudentSchema =  new mongoose.Schema({
    role:String,
    name:String,
    collage:String,
    email:String,
    password:String,

})

const Students = new mongoose.model("Students",StudentSchema);

const CompanySchema =  new mongoose.Schema({
  role:String,
  name:String,
  email:String,
  password:String,
  appliedEmails: [String]
})
const Companies = new mongoose.model("Companies",CompanySchema);
const posteventSchema = new mongoose.Schema({
     email:String,
     dates:String,
     category:String,
     description:String
})
const Postevents = new mongoose.model("Postevents",posteventSchema);

app.post("/signup",async(req,res)=>{
    try{
        const {role,name,collage,email,password} = req.body;
         if(role==='Student'){
        const userExits=await Students.findOne({email:email});
        
        if(userExits)return res.send({success:true,message:"Already user exits"})
     //password hasing ......
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            const user = await Students.create({
                 role:role,
                 name:name,
                 collage:collage,
                email:email,
                password:hash,
                
            })
            user.save();
            res.send({ success:true,message: 'sucessfully signup' });
        });    
      }
      else {
        const userExits=await Companies.findOne({email:email})
        if(userExits) return res.send({success:true,message:"Already user exits"})
        bcrypt.hash(password, saltRounds, async function(err, hash) {
          const user = await Companies.create({
               role:role,
               name:name,
              email:email,
              password:hash,
              appliedEmails: []
          })
          user.save();
          res.send({ success:true,message: 'sucessfully signup' });
        }); 
      } 

    }
    catch(err){
        console.log(err)
    }
})


app.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        var userExits = await Students.findOne({email:email} )
        if(!userExits)  userExits = await Companies.findOne({email:email} )
        if(userExits){
            bcrypt.compare(password, userExits.password, function(err, result) {
                if(result === true) {
                    return res.send({ success: true, pwd: true, user: JSON.stringify(userExits) });

                }
                else {
                  return  res.send({success:true,pwd:false,message:'wrong password'})
                }
            });
           
            
        }
        else {
          return   res.send({succes:false,message:'user not registered'})
        }
        }  catch(error){
            console.log(error);
        };
})


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
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
      from: 'techconnect380@gmail.com',
      to,
      subject,
      html,
    });
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};


app.post("/postevent",async(req,res) => {
        try{
       const {   eventDate, category,description, email}  =  req.body;
       const user = await Postevents.create({
        email:email,
        dates:eventDate,
        category:category,
        description:description
   })
   user.save();
   const emailSubject = 'New Event Posted!';
   const emailHtml = `
     <p>An event has been posted:</p>
     <p>Date: ${eventDate}</p>
     <p>Category: ${category}</p>
     <p>Description: ${description}</p>
   `;
   const totalusers=await Students.find({});
   const userEmails = totalusers.map(student => student.email);
   const sent = true;
   if(sent){
    res.send({ success:true,message: 'sucessfully posted' });
   } 
   for (const recipientEmail of userEmails){
    emailSent = await sendEmail(recipientEmail, emailSubject, emailHtml);
   }      
   
        } catch(err){
          console.log(err);
        }
});

app.get("/allposts",async(req,res)=>{
  try{
      const allposts = await Postevents.find()
      res.send(allposts);
  } catch(err){
    console.log(err);
  }
});

app.patch("/applied",async(req,res)=>{
    const {Semail , Cemail} = req.body;
    try {
      const companyExists = await Companies.findOne({ email: Cemail });
      if (!companyExists) {
          return res.status(404).json({ message: "Company not found" });
      }

      if (companyExists.appliedEmails.includes(Semail)) {
                return res.status(200).json({ message: "Already you applied" });
            }
            // If the email is not already present, push it to the appliedEmails array
        companyExists.appliedEmails.push(Semail);
        await companyExists.save();
      return res.status(200).json({  message: "Succesfully Applied" });
  } catch (error) {
      console.error("Error updating appliedEmails:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/company/:email",async(req,res)=>{
    try{  
  const {email} = req.params;
    const company =  await Companies.findOne({ email: email });
    if (!company) {
      return res.status(404).json({ success: false, message: "Company not found" });
  }
  let appliedStudentsData = [];
  for (const email of company.appliedEmails) {
    const student = await Students.findOne({ email: email });
    if (student) {
        // Extract required fields and push to studentsData array
        appliedStudentsData.push({
            name: student.name,
            email: student.email,
            collage: student.collage
        });
        } 
     }
     res.status(200).json({students: appliedStudentsData });
    } catch(err){
      console.log(err);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
                
});

app.listen(4000,function(){
  
    console.log("server started on 4000");
});
