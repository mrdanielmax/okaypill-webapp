DROP DATABASE IF EXISTS okaypill;
CREATE DATABASE okaypill;

DROP TABLE IF EXISTS ips;

CREATE TABLE ips (
  id serial primary key,
  ip varchar(255),
  date DATE NOT NULL DEFAULT CURRENT_DATE
)
