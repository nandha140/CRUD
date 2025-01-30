import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./table.css";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  console.log(users);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/all")
      .then((users) => {
        console.log(users);

        setUsers(users.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/users/" + id).then((users) => {
      console.log(users);

      if (users.data.success === true) {
        toast.success(users.data.massage);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };
  return (
    <div className="display-users">
      <button className="btn" onClick={() => navigate("/register")}>
        ADD +
      </button>
      <br />
      <table className="table" style={{ minWidth: "800px" }}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td data-label="NAME" style={{ padding: "20px" }}>
                  {user.name}
                </td>
                <td data-label="AGE">{user.age}</td>
                <td data-label="EMAIL">{user.email}</td>
                <td data-label="ACTION">
                  <button
                    className="btn-del"
                    onClick={() => handleDelete(user._id)}
                  >
                    DELETE
                  </button>
                  <button onClick={() => navigate(`/update/${user._id}`)}>
                    EDIT
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
