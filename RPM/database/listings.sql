CREATE TABLE listings (
  listing_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  rcs_id VARCHAR(10) NOT NULL,
  item_condition VARCHAR(12) NOT NULL,
  item_description VARCHAR(255) NOT NULL, 
  listing_title VARCHAR(100) NOT NULL,
  posting_date DATE NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  color VARCHAR (30) NOT NULL,
  CONSTRAINT FK_rcs_id FOREIGN KEY (rcs_id) REFERENCES users(rcs_id)
);

ALTER TABLE listings
ADD image_path VARCHAR(255);

ALTER TABLE listings
MODIFY price FLOAT(10, 2);

ALTER TABLE listings
ADD active BOOLEAN DEFAULT TRUE;

CREATE TABLE labs (
  lab_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  link VARCHAR(30) NOT NULL,
  lab_description VARCHAR(255) NOT NULL
);