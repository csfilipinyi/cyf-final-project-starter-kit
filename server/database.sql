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
   student_id      INTEGER REFERENCES users(user_id),
   learning_obj_id INTEGER REFERENCES learning_objective(id),

   ability INT,
   date_added DATE NOT NULL DEFAULT 'CURRENT_DATE'




   
);

INSERT into learning_objective(skill, description)
      VALUES('html', 'Understand what ''parent'' and ''child'' is'),
      ('html', 'Can create and link a stylesheet is'),
      ('html', 'Understand what semantic tags are and how to use them'),
      ('html', 'Be able to include a form in a web page'),
      ('html', 'Be able to create a button'),
      ('css', 'Understand what a selector is in CSS'),
      ('css', 'Understand the difference between a tag, class and ID'),
      ('css', 'Understand what prefixes are'),
      ('css', 'Understand what pseudo classes are'),
      ('css', 'Understand the difference between padding and margin'),
      ('css', 'Be able to create a comment in HTML and CSS'),
      ('css', 'Can create a media query that triggers a change / changes on another device / screen size'),
      ('css', 'Understand how to implement flexbox and when to use it'),
      ('css', 'Understand how to implement Grid and when to use it'),
      ('css', 'Understand how to include Bootstrap in a project'),
      ('css', 'Be able to use Bootstrap classes'),
      ('javascript', 'Be able to link a Javascript file in your project'),
      ('javascript', 'Be able to do a console.log()'),
      ('javascript', 'Understand what a console.log is used for'),
      ('javascript', 'Understand the different types of data in Javascript e.g. string, integer, etc.'),
      ('javascript', 'Be able to assign a variable with const and let'),
      ('javascript', 'Understand the difference between const and let'),
      ('javascript', 'Be able to write a function'),
      ('javascript', 'Be able to use array destructuring'),
      ('javascript', 'Understand what scope is and how it can affect your code'),
      ('javascript', 'Be able to handle JSON data from a fetch() request'),
      ('javascript', 'Understand what JSON is'),
      ('javascript', 'Be able to make a fetch() request'),
      ('javascript', 'Understand what a Promise is'),
      ('javascript', 'Understand what an API is and what they are used for'),
      ('javascript', 'Understand what common errors mean e.g. Syntax Error, Reference Error'),
      ('javascript', 'Be able to debug your code with tools like DevTools'),
      ('javascript', 'Be able to make POST requests'),
      ('javascript', 'Be able to make GET requests'),
      ('javascript', 'Understand the difference between GET and POST'),
      ('javascript', 'Understand the difference between client and server'),
      ('javascript', 'Understand the difference between synchronous and asynchronous'),
      ('javascript', 'Be able to use Javascript to modify HTML elements e.g. their CSS properties'),
      ('javascript', 'Create HTML elements with Javascript'),
      ('javascript', 'Be able to set up event listeners like click'),
      ('javascript', 'Be able to manipulate the DOM with query selectors like getElementById, querySelectorAll, etc.'),
      ('javascript', 'Understand what the DOM is'),
      ('react', 'Understand the difference between class and functional components'),
      ('react', 'Be able to create a React application with create-react-app'),
      ('react', 'Understand what JSX is and how it''s different to HTML and Javascript'),
      ('react', 'Be able to apply a class in JSX'),
      ('react', 'Be able to pass props'),
      ('react', 'Be able to handle events in React'),
      ('react', 'Be able to use ternary operators in React'),
      ('react', 'Be able to use conditional rendering'),
      ('react', 'Understand what state is and how to use it'),
      ('node', 'Be able to create a basic express server'),
      ('node', 'Understand what NPM is and how to use it'),
      ('node', 'Be able to install third party libraries with NPM'),
      ('node', 'Be able to use express to create a basic API'),
      ('node', 'Understand what a CRUD application does'),
      ('node', 'Be able to implement a GET request'),
      ('node', 'Be able to implement a POST request'),
      ('node', 'Be able to implement a DELETE request'),
      ('sql', 'Understand what SQL is and what it is used for'),
      ('sql', 'Understand what table, rows and columns refer to'),
      ('sql', 'Be able to create a database'),
      ('sql', 'Be able to create a table'),
      ('sql', 'Be able to insert data into a table'),
      ('sql', 'Be able to retrieve data from a table'),
      ('sql', 'Understand the different types of data'),
      ('sql', 'Be able to use conditionals in SQL statements'),
      ('sql', 'Be able to drop/delete tables'),
      ('sql', 'Be able to update data in a table'),
      ('sql', 'Be able to delete rows'),
      ('sql', 'Be able to join tables');

