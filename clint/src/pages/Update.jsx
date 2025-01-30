import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import useForm from "../assets/hooks/UseForm";

function Update () {
  const { id } = useParams();
  const navigate = useNavigate();
console.log(id);

  const { form, handleChange, setForm, resetForm } = useForm({
    name: "",
    email: "",
    age: "",
  });
  useEffect(() => {
      axios.get("http://localhost:3001/users/" + id).then((users) => {
        console.log(users);
        console.log("run");
        
        setForm((prev) => ({
          ...prev,
          name: users.data.users.name,
          email: users.data.users.email,
          age: users.data.users.age,
        }));
      });
    } ,[]);
console.log(form);

  const handleSubmit=(e) => {
    e.preventDefault()
    axios.put("http://localhost:3001/users/"+id, form).then((users) => {
      console.log(users);
      if (users.data.success === true) {
        toast.success(users.data.massage);
        resetForm({ name: "", email: "", age: "" });
       return navigate("/");
      }
  });
  
  };
  return (
    <div>
      <div className="update-head">
        <div className="update-form">
          <form action="" onSubmit={handleSubmit}>
            <center>
              <h2>UPDATE PAGE</h2>
            </center>
            <div>
              <label htmlFor="">NAME</label>
              <input
                type="text"
                name="name"
                placeholder="Enter the name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="Enter the email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">AGE</label>
              <input
              name="age"
                type="number"
                placeholder="Enter age"
                className="form-control"
                value={form.age}
                onChange={handleChange}
              />
            </div>
            <br />
            <center>
              <button className="update btn">UPDATE</button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
