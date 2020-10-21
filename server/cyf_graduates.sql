drop table if exists graduates cascade;
DROP TABLE IF EXISTS graduate_skill cascade;
drop table if exists skills ;
DROP TABLE IF EXISTS github_accounts;
DROP TABLE IF EXISTS CV;

CREATE TABLE skills (
    id              SERIAL PRIMARY KEY,
    skill_name   VARCHAR(50) NOT NULL
    
);

CREATE TABLE github_accounts (
    id   SERIAL PRIMARY KEY,
    account_name   VARCHAR(100) NOT NULL
);


CREATE TABLE CV (
    id              SERIAL PRIMARY KEY,
    cv_file   BYTEA NOT NULL
    
);

CREATE TABLE graduates (
  id       SERIAL PRIMARY KEY,
  first_name     VARCHAR(50) NOT NULL,
  surname  VARCHAR(50) NOT NULL,
  city     VARCHAR(30),
  personal_bio  VARCHAR(120),
  past_experience VARCHAR(120),
  employment_status BOOLEAN DEFAULT FALSE,
  organization VARCHAR(50),
  cv_id integer references CV(id),
  img  BYTEA,
  email VARCHAR(50),
  github_id integer references github_accounts(id)
);

create table graduate_skill (
  graduate_id       integer references graduates(id),
  skill_id       integer references skills(id),
  primary key (graduate_id, skill_id)
);



INSERT INTO skills (skill_name)VALUES('Javascript');
INSERT INTO CV (cv_file)VALUES(bytea('/Users/aalfutimie/Desktop/BuchraAugustEdit.docx'));


INSERT INTO github_accounts (account_name)VALUES('Buchraateka1984');

INSERT INTO graduates (first_name, surname, city, personal_bio,past_experience,employment_status,organization,github_id,img) VALUES ('Farhana','Khan','Liverpool','About me','little bit',false,'',1, bytea('/Users/aalfutimie/Desktop/sedraaa profile.jpg'));
INSERT INTO graduate_skill (graduate_id,skill_id)VALUES(1,1);

