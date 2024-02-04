
# TEAM_INFO
OVERVIEW :    
 * TeamInfo is a comprehensive team management system designed to streamline communication and facilitate efficient progress tracking within a team. The system caters to three main roles: Admin, Team Lead, and Team Member.
ROLE BASED ACCESS :
* ADMIN  : Monitors the numbers of projects completed and top team performance and overall team progress with team_names ....can also view a  particular team progress individually by  clicking on the desired team ..it displays the particular team details individually all the team-members with TeamLead progress if necessary.
* TEAM-LEAD: Manages their team efficiently, updates personal progress, and oversees the progress of individual team members..
* TEAM-MEMBER : Focuses on their tasks, updates personal progress, and reports any issues encountered during the work..
Automated Issue Reporting :
IMPACT : 
* TeamInfo ensures transparency, accountability, and effective communication within the team. By providing a centralized platform for tracking progress and addressing issues promptly, the system contributes to a more productive and collaborative work environment.

## Backend

This is the backend part of the TEAM_INFO project.
### Description

The backend serves as the API server for handling data requests and interactions with the database.

### Technologies Used

- Express.js
- MongoDB (via Mongoose)
- Bcrypt (for password hashing)
- Dotenv (for environment variables)
- Cors (for enabling CORS)
- Body-parser (for parsing request bodies)
- Nodemon (for development server auto-restart)

### Getting Started

To get started with the backend development, follow these steps:

1. Install Node.js and npm if not already installed. You can download them from [here](https://nodejs.org/).
2. Navigate to the backend directory:
      cd backend;
3. Install dependencies:
   npm install bcrypt body-parser cors dotenv express mongoose nodemon;
   
This command will install the following dependencies:

- `bcrypt`: A library for hashing passwords.
- `body-parser`: Middleware for parsing incoming request bodies.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- `dotenv`: A module for loading environment variables from a .env file.
- `express`: Web framework for building APIs.
- `mongoose`: MongoDB object modeling for Node.js.
- `nodemon`: Utility that monitors for changes in your source and automatically restarts the server.

Now you're ready to start the development server and work on the backend part of the TEAM_INFO project.
4. Start the development server:
   nodemon App.js;


### Acknowledgments

- Thanks to the creators of the libraries and frameworks used in this project.   
=======
# TeamInfo
TeamInfo is a comprehensive team management system designed to  facilitate efficient progress tracking within a team. The system caters to three main roles: Admin, Team Lead, and Team Member.

