CREATE DATABASE cyf_knowledge_checklist;

CREATE TABLE users
(
    user_id uuid DEFAULT uuid_generate_v4()  PRIMARY KEY,
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
   id uuid DEFAULT uuid_generate_v4()  PRIMARY KEY,
   skill VARCHAR(255) NOT NULL,
   description VARCHAR(500) NOT NULL
);

CREATE TABLE achievements

(
   id uuid DEFAULT uuid_generate_v4()  PRIMARY KEY,
   student_id      uuid REFERENCES users(user_id),
   learning_obj_id uuid REFERENCES learning_objective(id),
   ability INT,
   date_added DATE NOT NULL DEFAULT CURRENT_DATE

   
);