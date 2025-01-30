import mongoose from "mongoose";
import userModel from "../models/Users.js";

export const CreateUsers = async (req, res) => {
  console.log("run");

  const { name, email, age} = req.body;
  console.log(name, email, age,  )
  try {
    if (!name || !email || !age) {
      return res.status(401).send("All Fields Required");
    }
    const users = await userModel.create({
      name,
      email,
      age,
    });
    console.log(users);

    return res
      .status(200)
      .json({ message: "Register Successfully", success: true });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({ users, message: "Users Find Successfully" });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const getOneUsers = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("inValid id");
    }
    const users = await userModel.findById(id);

    if (!users) {
      return res.status(401).send("users not found");
    }
    console.log(users);
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
export const UpdateUsers = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(401).send("invalid id");
    }
    const update = await userModel.findByIdAndUpdate(
      { _id: id },
      { name, email, age },
      { new: true }
    );
    return res
      .status(201)
      .send({ message: "update successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(401).send("invalid id");
    }
    const deleteUsers = await userModel.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json({ message: "deleted successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
