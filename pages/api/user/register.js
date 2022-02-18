import connectDB from "../../../lib/connectDB";
import User from "../../../models/userSchema";

const register = async (req, res) => {
  await connectDB();
  const { method } = req;

  if (method === "POST") {
    const { name, _email: email, password } = req.body;
    //look for existing user
    let user = await User.findOne({ email: email });

    if (user) {
      throw { error: "User Already Exists" };
      return;
    }

    try {
      const newUser = new User({ name, email, password });
      newUser.save();
      res.json(newUser);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
};

export default register;
