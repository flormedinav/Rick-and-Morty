import React from "react";
import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validation({ ...userData, [property]: value }));

    setUserData({
      ...userData,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.divMayor}>
      <div className={style.container}>
        <h2 className={style.h2Form}>LOGIN</h2>
        <form onSubmit={handleSubmit} className={style.formForm}>
          <div className={style.divForm}>
            <label htmlFor="username" className={style.labelForm}>
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className={style.inputForm}
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className={style.labelForm}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className={style.inputForm}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className={style.btnForm}>
            GO!
          </button>
        </form>
      </div>
      <div className={style.imageForm}></div>
    </div>
  );
};

export default Form;
