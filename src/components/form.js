import { useState } from "react";

const Login = () => {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.userName || !data.password) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>UserName :</label>
        <input
          type="text"
          id="name"
          placeholder="Enter username"
          name="userName"
          value={data.userName}
          onChange={handleChange}
        />
        <br />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">log In</button>
        {status === false && <div>Enter UserName and Password</div>}
        {status === true && <div>Login Succesful</div>}
      </form>
      {status}
    </>
  );
};

export default Login;
