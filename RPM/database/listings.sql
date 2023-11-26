CREATE TABLE listings (
  listing_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  rcs_id VARCHAR(10) NOT NULL,
  item_condition VARCHAR(12) NOT NULL,
  item_description VARCHAR(255) NOT NULL, 
  listing_title VARCHAR(100) NOT NULL,
  posting_date DATE NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  active BOOLEAN NOT NULL,
  color VARCHAR (30) NOT NULL,
  clicks INT UNSIGNED
);
