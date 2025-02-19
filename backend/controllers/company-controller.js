const Companies = require("../models/Company");
const Students = require("../models/Student");

exports.applyToCompany = async (req, res) => {
    try {
        const { Semail, Cemail } = req.body;
        const company = await Companies.findOne({ email: Cemail });

        if (!company) return res.status(404).json({ message: "Company not found" });

        if (company.appliedEmails.includes(Semail)) {
            return res.status(400).json({ message: "Already applied" });
        }

        company.appliedEmails.push(Semail);
        await company.save();
        res.json({ message: "Successfully applied" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getCompanyDetails = async (req, res) => {
    try {
        const { email } = req.params;
        const company = await Companies.findOne({ email });

        if (!company) return res.status(404).json({ message: "Company/ organisation  not found" });

        const appliedStudents = await Students.find({ email: { $in: company.appliedEmails } });

        res.json({ students: appliedStudents });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
