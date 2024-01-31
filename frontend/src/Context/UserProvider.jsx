import React, { useEffect, useState }  from "react";
import UserContext from "./ContextAPI";
import axios from "axios";

const UserProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [teamData, setTeamData] = useState(null);  // particular one team data 
    const [teamprogress, setTeamProgress] = useState(null); //overall teams average progress
  const setUserContext = (userData) => {
    setUser(userData);
  };  
  
   useEffect(() => {
        const fetchData = async () =>{
            if(user && user.role==="TeamLead"){
              const teamname = user.teamname;
              console.log(teamname);
              try{
                const response = await axios.get(`http://localhost:4000/users/${teamname}`);
                const data = response.data;
                setTeamData(data);
              } catch(error){
                   console.log(error);
              }
            }
            else if(user && user.role==="Admin"){
              try{
                  const response =  await axios.get("http://localhost:4000/average_progress");
                  console.log(response.data);
                   const data = response.data;
                  setTeamProgress(data);
              } catch(error){
                console.log(error);
              }
            }
        };  fetchData();

   },[user]);  // Trigger the effect whenever the user state changes


    return(
    <UserContext.Provider  value={{ user,teamData, teamprogress,setUserContext }}>
      {children}
    </UserContext.Provider>
    )
};

export default UserProvider;