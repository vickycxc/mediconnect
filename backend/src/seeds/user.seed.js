import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "sonny@gmail.com",
    fullName: "dr. Sonny Fadli, Sp.OG., M.Ked.Klin",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2024/01/P1020190-1-scaled-e1705457562122-957x1024.jpg",
  },
  {
    email: "atina@gmail.com",
    fullName: "dr. Atina Irani Wira Putri, Sp.PD",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2023/12/P1020110-scaled-e1703662679824-1024x991.jpg",
  },
  {
    email: "ratri@gmail.com",
    fullName: "dr. Ratri Dwi Indriani, Sp.An., FIP, FIPP",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2023/12/WhatsApp-Image-2023-12-22-at-11.42.17-scaled-e1703661982951-959x1024.jpeg",
  },
  {
    email: "riva@gmail.com",
    fullName: "dr. Riva Satya Radiansyah, Sp.N",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2023/12/WhatsApp-Image-2023-12-22-at-9.56.29-AM-e1703215996501-200x200.jpeg",
  },
  {
    email: "zain@gmail.com",
    fullName: "dr. Zain Budi Syulthoni, Sp.KJ",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2023/12/WhatsApp-Image-2023-12-22-at-9.56.57-AM-e1703216630651-200x200.jpeg",
  },
  {
    email: "tri@gmail.com",
    fullName: "dr. Tri Hedianto, Sp.THT-KL",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2023/12/WhatsApp-Image-2023-12-22-at-9.56.01-AM-e1703216259814-200x200.jpeg",
  },
  {
    email: "afia@gmail.com",
    fullName: "dr. Afia Nuzila Fadhlina, Sp.M., M.Ked.Klin",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2023/12/P1020100-scaled-e1703662519825-200x200.jpg",
  },
  {
    email: "rahmah@gmail.com",
    fullName: "dr. Rahmah Yasinta Rangkuti, M.Biomed., Sp.A",
    password: "123456",
    profilePic:
      "https://www.its.ac.id/professionalmed/wp-content/uploads/sites/157/2023/07/4.-dr.-Rahmah-Yasinta-Rangkuti-Sp.A.-M.Biomed-e1688716588164-200x200.png",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
