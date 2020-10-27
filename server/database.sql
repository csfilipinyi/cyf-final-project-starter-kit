CREATE DATABASE cyf_knowledge_checklist;

CREATE TABLE users
(
    user_id SERIAL  PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_role VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_slack VARCHAR(255) ,
    user_password VARCHAR(255) NOT NULl,
    user_github VARCHAR(255),
    class_id VARCHAR(255) NOT NULL, 
    username VARCHAR(50),
    user_phone VARCHAR(50),
    cyf_city  VARCHAR(50) NOT NULL
    

   
);

CREATE TABLE learning_objective
(
   id SERIAL  PRIMARY KEY,
   skill VARCHAR(255) NOT NULL,
   description VARCHAR(500) NOT NULL
);

CREATE TABLE achievements

(
   id SERIAL  PRIMARY KEY,
   student_id      SERIAL REFERENCES users(user_id),
   learning_obj_id INTEGER REFERENCES learning_objective(id),
   ability INT,
   date_added DATE NOT NULL DEFAULT CURRENT_DATE

   
);

INSERT into learning_objective(skill, description)
VALUES('Html', 'Understand what ''parent'' and ''child'' is'),
      ('Html', 'Can create and link a stylesheet is'),
      ('Html', 'Understand what semantic tags are and how to use them'),
      ('Html', 'Be able to include a form in a web page'),
      ('Html', 'Be able to create a button'),
      ('CSS', 'Understand what a selector is in CSS'),
      ('CSS', 'Understand the difference between a tag, class and ID'),
      ('CSS', 'Understand what prefixes are'),
      ('CSS', 'Understand what pseudo classes are'),
      ('CSS', 'Understand the difference between padding and margin'),
      ('CSS', 'Be able to create a comment in HTML and CSS'),
      ('CSS', 'Can create a media query that triggers a change / changes on another device / screen size'),
      ('CSS', 'Understand how to implement flexbox and when to use it'),
      ('CSS', 'Understand how to implement Grid and when to use it'),
      ('CSS', 'Understand how to include Bootstrap in a project'),
      ('CSS', 'Be able to use Bootstrap classes'),
      ('Javascript', 'Be able to link a Javascript file in your project'),
      ('Javascript', 'Be able to do a console.log()'),
      ('Javascript', 'Understand what a console.log is used for'),
      ('Javascript', 'Understand the different types of data in Javascript e.g. string, integer, etc.'),
      ('Javascript', 'Be able to assign a variable with const and let'),
      ('Javascript', 'Understand the difference between const and let'),
      ('Javascript', 'Be able to write a function'),
      ('Javascript', 'Be able to use array destructuring'),
      ('Javascript', 'Understand what scope is and how it can affect your code'),
      ('Javascript', 'Be able to handle JSON data from a fetch() request'),
      ('Javascript', 'Understand what JSON is'),
      ('Javascript', 'Be able to make a fetch() request'),
      ('Javascript', 'Understand what a Promise is'),
      ('Javascript', 'Understand what an API is and what they are used for'),
      ('Javascript', 'Understand what common errors mean e.g. Syntax Error, Reference Error'),
      ('Javascript', 'Be able to debug your code with tools like DevTools'),
      ('Javascript', 'Be able to make POST requests'),
      ('Javascript', 'Be able to make GET requests'),
      ('Javascript', 'Understand the difference between GET and POST'),
      ('Javascript', 'Understand the difference between client and server'),
      ('Javascript', 'Understand the difference between synchronous and asynchronous'),
      ('Javascript', 'Be able to use Javascript to modify HTML elements e.g. their CSS properties'),
      ('Javascript', 'Create HTML elements with Javascript'),
      ('Javascript', 'Be able to set up event listeners like click'),
      ('Javascript', 'Be able to manipulate the DOM with query selectors like getElementById, querySelectorAll, etc.'),
      ('Javascript', 'Understand what the DOM is'),
      ('React', 'Understand the difference between class and functional components'),
      ('React', 'Be able to create a React application with create-react-app'),
      ('React', 'Understand what JSX is and how it''s different to HTML and Javascript'),
      ('React', 'Be able to apply a class in JSX'),
      ('React', 'Be able to pass props'),
      ('React', 'Be able to handle events in React'),
      ('React', 'Be able to use ternary operators in React'),
      ('React', 'Be able to use conditional rendering'),
      ('React', 'Understand what state is and how to use it'),
      ('Node.js', 'Be able to create a basic express server'),
      ('Node.js', 'Understand what NPM is and how to use it'),
      ('Node.js', 'Be able to install third party libraries with NPM'),
      ('Node.js', 'Be able to use express to create a basic API'),
      ('Node.js', 'Understand what a CRUD application does'),
      ('Node.js', 'Be able to implement a GET request'),
      ('Node.js', 'Be able to implement a POST request'),
      ('Node.js', 'Be able to implement a DELETE request'),
      ('SQL', 'Understand what SQL is and what it is used for'),
      ('SQL', 'Understand what table, rows and columns refer to'),
      ('SQL', 'Be able to create a database'),
      ('SQL', 'Be able to create a table'),
      ('SQL', 'Be able to insert data into a table'),
      ('SQL', 'Be able to retrieve data from a table'),
      ('SQL', 'Understand the different types of data'),
      ('SQL', 'Be able to use conditionals in SQL statements'),
      ('SQL', 'Be able to drop/delete tables'),
      ('SQL', 'Be able to update data in a table'),
      ('SQL', 'Be able to delete rows'),
      ('SQL', 'Be able to join tables');

