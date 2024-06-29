import mongoose from "mongoose";

export async function main() {
  const uri ="mongodb+srv://Seelaboyina:Spraveen382$@fullstackcluster.0gnf5r9.mongodb.net/"

  try {
    await mongoose.connect(uri);

    const db = mongoose.connection.useDb("test");
    const user_details = db.collection("user_details");
    const vegitable_data = db.collection("vegitable_data");

    console.log("Mongo Connected");
    return { user_details, vegitable_data };
  } catch (error) {
    console.log(error);
  }
}
