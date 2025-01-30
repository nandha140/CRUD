// import React from 'react'

import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useForm from "../assets/hooks/UseForm";

function Register() {
  const navigate = useNavigate();
  const { form, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    axios.post("http://localhost:3001/users", form).then((users) => {
      if (users.data.success === true) {
        toast.success(users.data.message);
        resetForm({ name: "", email: "", age: "", password: "" });
        return navigate("/");
      }
    });
  };
  console.log(form);
  return (
    <div className="register-head">
      <div className="register-form">
        <h2>REGISTER PAGE</h2>

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">NAME</label>

          <input type="text" name="name" id="name" onChange={handleChange} />

          <label htmlFor="email">EMAIL</label>

          <input type="text" name="email" id="email" onChange={handleChange} />

          <label htmlFor="age">AGE</label>

          <input type="text" name="age" id="age" onChange={handleChange} />

          <center>
            <button className="register btn" type="submit">
              REGISTER
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Register;
