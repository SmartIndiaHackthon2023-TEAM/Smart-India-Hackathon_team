import mongoose from "mongoose"

let alreadyDone = false;

export const ensureDbConnected = async () =>
{
    if(alreadyDone)
    {
        return
    }
    mongoose.connect('mongodb+srv://Vibgitcode27:Vibhor@cluster0.q6iu42u.mongodb.net/', { dbName: "coursesNext" });
    alreadyDone = true
}

// This is the high level idea of the

// import mongoose, { ConnectOptions } from "mongoose";

// let connectionPromise: Promise<void> | null = null;

// const connectionOptions: ConnectOptions = {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
//   dbName: "coursesNext",
// };

// const ensureDbConnected = async (): Promise<void> => {
//   if (!connectionPromise) {
//     connectionPromise = mongoose.connect('mongodb+srv://Vibgitcode27:Vibhor@cluster0.q6iu42u.mongodb.net/', connectionOptions)
//       .then(() => {
//         console.log("Connected to MongoDB");
//       })
//       .catch((error) => {
//         console.error("Error connecting to MongoDB:", error);
//         throw error; // Rethrow the error to signal that the connection failed
//       });
//   }

//   await connectionPromise;
// };

// export default ensureDbConnected;