import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log("Delete", _id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
          alert("User deleted successfully");
        }
      });
  };

  return (
    <div>
      <h2>{loadedUsers.length}</h2>
      <div>
        {loadedUsers.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            {user._id}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
