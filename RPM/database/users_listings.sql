CREATE TABLE users_listings (
  rcs_id VARCHAR(10) NOT NULL,
  listing_id INT NOT NULL,
  PRIMARY KEY (rcs_id, listing_id),
  CONSTRAINT FK_rcs_id FOREIGN KEY (rcs_id) REFERENCES users(rcs_id),
  CONSTRAINT FK_listing_id FOREIGN KEY (listing_id) REFERENCES listings(listing_id)
);
