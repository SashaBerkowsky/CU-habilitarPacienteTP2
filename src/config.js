import dotenv from "dotenv";
dotenv.config();

function getAuth() {
  return {
    mail: process.env.EMAIL_AUTH,
    pass: process.env.PASS_AUTH,
  };
}

function getDBAuth() {
  return process.env.MONGO_DB_AUTH;
}

export { getAuth, getDBAuth };
