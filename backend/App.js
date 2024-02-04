require('dotenv').config()
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
const DB_URI="mongodb+srv://lokeswararaodumpala2004:1IaYdSWsAlPSuQW2@cluster0.eurlp56.mongodb.net/Team_Info_DB?retryWrites=true&w=majority";
mongoose.connect(DB_URI).then(()=>{
console.log("connected to db");
}).catch((err)=>{
  console.log(err);
});
app.use(cors());
app.use(express.static("public"));
app.use(express.json());


const UserSchema =  new mongoose.Schema({
    role:String,
    name:String,
    email:String,
    password:String,
    teamname:String,
    projectname:String,
    progress: { type: Number, default: 0 }
})
 

const User = new mongoose.model("User",UserSchema);

app.post("/signup",async(req,res)=>{
    try{
        const {role,name,email,password,teamname,projectname} = req.body;
        
        const userExits=await User.findOne({email:email})
        console.log(userExits)
        if(userExits)return res.send({success:true,message:"Already user exits"})
     //password hasing ......
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            const user = await User.create({
                 role:role,
                 name:name,
                email:email,
                password:hash,
                teamname:teamname,
                projectname:projectname
            })
            user.save();
            res.send({ success:true,message: 'sucessfully signup' });
           
        });

        
    }
    catch(err){
        console.log(err)
    }
})
app.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userExits = await User.findOne({email:email} )
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

app.patch('/updateProgress', async (req, res) => {
    try {
      const { _id, progress } = req.body;
      // Find the user by ID
      const user = await User.findById(_id);
      // If the user is found, update the progress; otherwise, send an error
      if (user) {
        // If the user doesn't have a progress field, set it to a default value
        const updatedUser = await User.findOneAndUpdate(
          { _id },
          { $set: { progress: progress || 0 } },
          { new: true } // Return the updated document
        );
         
    // if (!updatedUser) {
    //     return res.status(404).json({ error: 'User not found' });
    //   }
        res.json(updatedUser);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error('Error updating user progress:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Define a route to get users by teamname
app.get('/users/:teamname', async (req, res) => {
  const { teamname } = req.params;

  try {
    const users = await User.find({ teamname });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get("/average_progress", async (req,res) => {
         try{
          const teamMembers = await User.find({
            role: { $in: ["TeamMember", "TeamLead"] },
          });
      
          // Use reduce to accumulate team progress data
          const teamProgressData = teamMembers.reduce((result, user) => {
            if (!result[user.teamname]) {
              result[user.teamname] = {
                teamname: user.teamname,
                projectname: user.projectname,
                teamProgress: user.progress,  // Initialize with the user's progress
                teamMembersCount: 1,  // Start with one member
              };
            } else {
              // If the team is already present, update progress, member count, and projectname
              result[user.teamname].teamProgress += user.progress;
              result[user.teamname].teamMembersCount += 1;
              result[user.teamname].projectname = user.projectname;
            }
      
            return result;
          }, {});
      
          // Calculate the average progress for each team and object.values is to convert object into array
          const averageTeamProgress = Object.values(teamProgressData).map((team) => ({
            teamname: team.teamname,
            projectname: team.projectname,
            averageProgress: team.teamMembersCount
              ? (team.teamProgress / team.teamMembersCount).toFixed(0)
              : 0,
          }));
      
          // Send the average team progress data as a JSON response
          res.json(averageTeamProgress);
         } catch(error){
          console.log(error);
         }
} );


app.listen(4000,function(){
  
    console.log("server started on 4000");
});
