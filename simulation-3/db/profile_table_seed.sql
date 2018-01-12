create table if not exists profiles(
    id serial primary key,
    firstname varchar(80),
    lastname varchar(80),
    gender text,
    haircolot text,
    eyecolor text,
    hobby text,
    birthdayDay number,
    birthdayMonth text,
    birthdayYear number,
    img text
)