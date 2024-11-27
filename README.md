Employee-Records
Overview
The Employee Records project is a full-stack(MERN) application designed to manage employee data. It incorporates both server-side and client-side components, utilizing technologies such as Express for the server, React for the client, and MongoDB for the database. The application allows for the creation, retrieval, updating, and deletion (CRUD) of employee records.

Directory Structure
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Record.jsx
│   │   │   └── RecordList.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   └── tailwind.config.js
└── server
    ├── db
    │   └── connection.js
    ├── routes
    │   └── record.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── server.js
Server-Side Files
server.js: Entry point of the server application. Sets up Express server, middleware, and routes.
routes/record.js: Defines routes for CRUD operations on employee records.
db/connection.js: Establishes connection to MongoDB database.
Client-Side Files
src/App.jsx: Main component of the client application. Renders Navbar and handles routing using React Router.
src/components/Navbar.jsx: Navigation bar component for the application.
src/components/Record.jsx: Component for creating and updating employee records.
src/components/RecordList.jsx: Component for displaying a list of employee records.
Package.json Files
server/package.json: Contains dependencies and scripts for the server application.
client/package.json: Contains dependencies and scripts for the client application.
Other Files
index.html: HTML file for the client-side application.
index.css: CSS file for styling the client-side application.
Usage
Clone the repository.
Navigate to the server directory and run npm install to install server dependencies.
Create a .env file in the server directory and set up MongoDB connection URI.
Run npm start in the server directory to start the server.
Navigate to the client directory and run npm install to install client dependencies.
Run npm run dev in the client directory to start the client development server.
Access the application in your browser at http://localhost:3000.
Dependencies
Express
MongoDB
React
React Router
Vite
Tailwind CSS
About
This is a simple MERN stack application.

Topics
react express node mongodb mern-stack fullstack-development
Resources
 Readme
License
 MIT license
 Activity
Stars
 0 stars
Watchers
 1 watching
Forks
 0 forks
Report repository
Releases
No releases published
Packages
No packages published
Contributors
2
@AaronGulman
AaronGulman
@dependabot[bot]
dependabot[bot]
Languages
JavaScript
94.7%
 
CSS
3.4%
 
HTML
1.9%
Footer
