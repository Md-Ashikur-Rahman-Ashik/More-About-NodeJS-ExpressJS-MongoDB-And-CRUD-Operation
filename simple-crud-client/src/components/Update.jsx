import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log("The user's name is:", name);
    console.log("The user's email is:", email);
  };

  return (
    <div>
      <h3>Update information of {loadedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedUser?.name} />
        <br />
        <input
          type="email"
          defaultValue={loadedUser?.email}
          name="email"
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
