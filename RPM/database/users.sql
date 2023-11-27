CREATE TABLE users (
  rcs_id VARCHAR(10) NOT NULL PRIMARY KEY,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(30) NOT NULL, 
  user_password VARCHAR(8) NOT NULL,
  user_location VARCHAR(30) NOT NULL
);