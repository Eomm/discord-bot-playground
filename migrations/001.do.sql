CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  discord_id VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  discriminator VARCHAR(4) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);