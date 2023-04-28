import { connectToMongoDB } from "component/lib/mongodb";
import User from "component/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) return res.status(409).json({ error: "Data is missing" });

    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: "User already exists" });
    } else {
      if (password.length < 6)
        return res
          .status(409)
          .json({ error: "Password should be atleast 6 characters long" });

      const hashedPassword = await bcrypt.hash(password, 12);

      try {
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });
        
        const user = {
          email: newUser.email,
          username: newUser.username,
          _id: newUser._id,
        };

        return res.status(201).json({
          success: true,
          user,
        });
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
      }
      
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;