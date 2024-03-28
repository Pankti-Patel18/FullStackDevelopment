import React, { useState } from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // const handleSubmit =async (e) => {
    // e.preventDefault();
    // Add your form submission logic here
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('UserName:', UserName);
    // console.log('Password:', password);
    // console.log('Gender:', gender);
    // console.log('Language:', language);

  //   const response = await axios.post("http://localhost:8080/user/add", {
  //     language,
  //     email,
  //     gender,
  //     name,
  //     password,
  //     username,

  //   });
  //   console.log(response.data);

  // };
 
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8060/user/signup", {
      language,
      email,
      gender,
      name,
      password,
      username,
    });
    // console(response.data);
    if (response.data === "Sign up Successful") {
      // User signup successful
      alert("Sign up Successful");
      navigate("/login");
      // Redirect or perform other actions as needed
    } else {
      // Username already registered
      alert("Username is Already Registered!");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    // Handle other errors, such as network issues or server errors
    // Display appropriate error message to the user
    alert("Error during signup. Please try again later.");
  }
};


  return (
    <div className="container_login">
      <div className="form-container_login">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />

          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>UserName:</label>
          <input
            type="text"
            value={username}
            onChange={handleUserNameChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </div>

          <label>Language:</label>
           <select
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="" disabled>
              Select Language
            </option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select> 

          <button className='signupbutton' type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
