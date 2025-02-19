const bcrypt = require("bcrypt");
const Students = require("../models/Student");
const Companies = require("../models/Company");

const saltRounds = 10;

exports.signup = async (req, res) => {
    try {
        const { role, name, collage, email, password } = req.body;

        if (role === "Student") {
            const userExists = await Students.findOne({ email });

            if (userExists) return res.status(400).json({ message: "User already exists" });

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const user = await Students.create({ role, name, collage, email, password: hashedPassword });
            res.json({ success: true, message: "Successfully signed up" });

        } else {
            const userExists = await Companies.findOne({ email });

            if (userExists) return res.status(400).json({ message: "User already exists" });

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const user = await Companies.create({ role, name, email, password: hashedPassword, appliedEmails: [] });
            res.json({ success: true, message: "Successfully signed up" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await Students.findOne({ email }) || await Companies.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not registered" });

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.json({ success: true, pwd: true, user });
        } else {
            res.status(401).json({ success: false, message: "Wrong password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
