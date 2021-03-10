import React, { useState } from "react";
import "../Form.scss";

const SignUpForm = ({ onSubmit }) => {
  const initialState = {
    email: "",
    password: "",
    name: "",
    direction: "",
    category: "",
    profileImg: "",
  };
  const [info, setInfo] = useState(initialState);
  const [step, setStep] = useState(1);

  console.log(info);
  const handleCategory = (info) => {
    setInfo((state) => ({ ...state, category: [...state.category, info] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 4) {
      onSubmit({ ...info });
      setInfo(initialState);
      setStep(1);
    } else {
      setStep((state) => (state = state + 1));
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label htmlFor="email">¿Comó te llamas?</label>
          <input
            type="text"
            name="name"
            id="name"
            value={info.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="text"
            name="email"
            id="email"
            value={info.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={info.password}
            onChange={handleChange}
            required
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <label htmlFor="direction">¿En que distrito vives?</label>
          <select
            name="direction"
            id="direction"
            value={info.direction}
            onChange={handleChange}
            required
          >
            <option value="Ciutat Vella">Ciutat Vella</option>
            <option value="Eixample">Eixample</option>
            <option value="Sants-Montjuïc">Sants-Montjuïc</option>
            <option value="Les Corts">Les Corts</option>
            <option value="Sarrià-Sant Gervasi">Sarrià-Sant Gervasi</option>
            <option value="Gràcia">Gràcia</option>
            <option value="Horta - Guinardó">Horta - Guinardó</option>
            <option value="Nou Barris">Nou Barris</option>
            <option value="Sant Andreu">Sant Andreu</option>
            <option value="Sant Martí">Sant Martí</option>
          </select>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3 onClick={() => handleCategory("1")}>Category 1</h3>
          <h3 onClick={() => handleCategory("2")}>Category 2</h3>
          <h3 onClick={() => handleCategory("3")}>Category 3</h3>
        </div>
      )}
      {step < 4 ? (
        <button>Next</button>
      ) : (
        <input type="submit" value="Signup" />
      )}
    </form>
  );
};

export default SignUpForm;
