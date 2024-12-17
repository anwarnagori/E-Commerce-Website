// import React from "react";
// import { useEffect, useState } from "react";
// import Icon from "../../assets/images/icon.png";

// const [users, setUsers] = useState([]);

// const Header = () => {
//   async function requestPets() {
//     useEffect(() => {
//          requestPets();
//     }, []);
//     const res = await fetch(
//       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
//     );
//     const json = await res.json();

//     setUsers(json.users);
//   }
//   console.log(setUsers)
//   return (
//     <>
//       <div className="header">
//         <div className="icon">
//           <img height={90} width={210} src={Icon} alt="icon" />
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Info</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </nav>
//         <div className="btns">
//           <button className="sign-in" onClick={requestPets()}>Sign-Up</button>
//           <button className="log-in">Log-in</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";

const SignInForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      setError("Name and Password are required!");
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        window.location.href = "./";
      } else {
        setError("Invalid username or password!");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
