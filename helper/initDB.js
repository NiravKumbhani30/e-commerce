import mongoose from "mongoose";

function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Alredy Connected");
    return;
  }

  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Connecttion Error", error);
  });
}

export default initDB;
