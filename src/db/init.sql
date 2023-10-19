CREATE DATABASE IF NOT EXISTS recipes_service;
USE recipes_service;

CREATE USER 'recipe_db_user'@'localhost' IDENTIFIED BY 'hellofresh';
GRANT ALL ON recipes_service.* TO 'recipe_db_user'@'localhost';

create table product
(
    id                varchar(50) primary key,
    created_at        timestamp NOT NULL default CURRENT_TIMESTAMP,
    updated_at        timestamp NOT NULL default CURRENT_TIMESTAMP,
    productName       varchar(250) NOT NULL,
    headline          varchar(250) NOT NULL,
    min               integer NOT NULL,
    max               integer NOT NULL,
    baseRecipePrice   integer NOT NULL,
    shippingPrice     integer NOT NULL
);

create table recipes
(
    id                varchar(50) primary key,
    created_at        timestamp NOT NULL default CURRENT_TIMESTAMP,
    updated_at        timestamp NOT NULL default CURRENT_TIMESTAMP,
    product_id        varchar(50) NOT NULL,
    name              varchar(250) NOT NULL,
    slug              varchar(250) NOT NULL,
    headline          varchar(250) NOT NULL,
    image             varchar(250) NOT NULL,
    selected          integer NOT NULL,
    selectionLimit    integer,
    extraCharge       integer NOT NULL default 0,
    yields            integer NOT NULL
);
