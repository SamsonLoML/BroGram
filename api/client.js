import sanityClient from "@sanity/client";
import dotenv from "dotenv";
dotenv.config(); //read.env file

export default sanityClient({
    projectId: "w9tjleuu",
    dataset: "production",
    useCdn: false, //no cashing to ensure fresh data
    apiVersion: "2022-03-13",
    token: process.env.SANITY_API_TOKEN,
  });