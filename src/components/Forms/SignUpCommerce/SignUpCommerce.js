import React, { useState } from "react";
import "../Form.scss";

const SignUpForm = ({ onSubmit }) => {
  const initialState = {
    email: "",
    password: "",
    name: "",
    direction: "",
    neighbourhood: "",
    category: "",
    profileImg: "",
    description: "",
    tags: [],
    schedule: [],
    instagram: "",
    facebook: "",
    twitter: "",
    isCommerce: true,
  };

  const [info, setInfo] = useState(initialState);
  const [step, setStep] = useState(1);
  const [text, setText] = useState("");
  console.log(info);

  const saveIt = (key, e) => {
    e.preventDefault();
    setInfo((state) => ({ ...state, [key]: [...state[key], text] }));
    setText("");
  };

  const deleteTags = (tagClicked) => {
    const newTags = info.tags.filter((tag) => !tagClicked);
    setInfo((state) => ({ ...state, tags: newTags }));
  };

  const deleteSchedule = (scheduleClicked) => {
    console.log(scheduleClicked);
    const newSchedule = info.schedule.filter(
      (schedule) => schedule === !scheduleClicked
    );
    console.log(newSchedule);
    setInfo((state) => ({ ...state, schedule: newSchedule }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 5) {
      onSubmit({ ...info });
      setInfo(initialState);
      setStep(1);
    } else {
      setStep((state) => (state = state + 1));
    }
  };
  const handleText = (event) => {
    const { value } = event.target;
    setText(value);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <article>
      <form action="" onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="personal-info">
            <label htmlFor="name">¿Comó se llama tu negocio?</label>
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
          <div className="location">
            <p>
              Puedes incluir los distintos horarios que tienes en tu negocio.
              Pulsa intro para guardar el Horario
            </p>
            <label htmlFor="schedule">Horario</label>
            <input
              type="text"
              name="schedule"
              id="schedule"
              value={info.text}
              onChange={handleText}
              required
            />
            <button onClick={(event) => saveIt("schedule", event)}>Save</button>
            <div className="horario">
              {info.schedule.map((schedule) => (
                <p key={schedule} onClick={() => deleteSchedule(schedule)}>
                  {schedule}
                </p>
              ))}
            </div>
            <label htmlFor="neighbourhood">
              ¿En que distrito se ubica el negocio?
            </label>
            <select
              name="neighbourhood"
              id="neighbourhood"
              value={info.neighbourhood}
              onChange={handleChange}
              required
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Escoge una opción
              </option>
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
            <label htmlFor="direction">Dinos tu dirección</label>
            <input
              type="text"
              name="direction"
              id="direction"
              value={info.direction}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {step === 3 && (
          <div className="category">
            <label htmlFor="category">¿Qué tipo de negoció tienes?</label>
            <select
              name="category"
              id="category"
              value={info.category}
              onChange={handleChange}
              required
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Escoge una opción
              </option>
              <option value="talleres">Talleres</option>
              <option value="deporte">Deporte</option>
              <option value="exposiciones">Exposiciones</option>
              <option value="Visitas y tours">Visitas y tours</option>
              <option value="infatil">Infatil</option>
              <option value="espectáculos">Espectáculos</option>
              <option value="música">Música</option>
              <option value="otros">Otros</option>
            </select>
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              id="tags"
              value={info.text}
              onChange={handleText}
              required
            />
            <button onClick={(event) => saveIt("tags", event)}>Save</button>
            <div className="tags">
              {info.tags.map((tag) => (
                <p key={tag} onClick={() => deleteTags(tag)}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="socials">
            <label htmlFor="description">
              ¿Como le explicarias tu negocio a los usuarios?
            </label>
            <input
              type="textarea"
              name="description"
              id="description"
              value={info.description}
              onChange={handleChange}
            />
            <p>Si quieres dinos cuales són las redes de tu negocio</p>
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              name="facebook"
              id="facebook"
              value={info.facebook}
              onChange={handleChange}
            />
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              value={info.twitter}
              onChange={handleChange}
            />
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              name="instagram"
              id="instagram"
              value={info.instagram}
              onChange={handleChange}
            />
          </div>
        )}
        {step < 5 ? (
          <button>Next</button>
        ) : (
          <input type="submit" value="Signup" />
        )}
      </form>
    </article>
  );
};

export default SignUpForm;
