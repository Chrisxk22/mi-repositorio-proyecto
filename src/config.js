// Read environment variables
import { config } from "dotenv";
config();

const configurations = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: `mongodb+srv://titofer:Hermione2021@cluster0.gxaoa.mongodb.net/proyecto?authSource=admin&replicaSet=atlas-whbh1f-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true
  }`,
};

export default configurations;
