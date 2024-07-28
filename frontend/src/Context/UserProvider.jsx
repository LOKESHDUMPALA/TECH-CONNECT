import React, { useEffect, useState }  from "react";
import UserContext from "./ContextAPI";
import axios from "axios";

const UserProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const[allpost , setAllpost] = useState(null);
    const [dates, setdate] = useState(null);
    const [appliedData, setAppliedData] = useState(null);

    const setUserContext = (userData) => {
      setUser(userData);
    }
      const sendquery = (dates) =>{
        setdate(dates);
      }
      
   useEffect(() => {
    const fetchData = async () =>{
       
          try{
            const response = await axios.get("https://tech-connect-backend-7.onrender.com/allposts");
            const data = response.data;
            setAllpost(data);

            if(user && user.role==="Institute/Company") {
              const companyResponse = await axios.get(`https://tech-connect-backend-7.onrender.com/company/${user.email}`);
                console.log(companyResponse.data.students);
                const students = companyResponse.data.students;
                setAppliedData(students);
            }

          } catch(error){
               console.log(error);
          }
       
        
    };  fetchData();

},[user]);
    return(
    <UserContext.Provider  value={{ user,allpost,setUserContext,sendquery,dates,appliedData }}>
      {children}
    </UserContext.Provider>
    )
};

export default UserProvider;