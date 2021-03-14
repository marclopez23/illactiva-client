import React, { useState } from "react";
import "../Form.scss";
import { uploadFileService } from "../../../service/upload.service";

const EventForm = ({ onSubmit }) => {
  const initialState = {
    title: "",
    description: "",
    eventImg: "",
    category: "",
    free: false,
    price: 0,
    date: "",
    file: "",
    hour: "",
    place: "",
  };
  const [info, setInfo] = useState(initialState);
  const [itsFree, setFree] = useState(false);
  console.log(info);
  const [imageReady, setImageReady] = useState(true);
  const handleUpload = async (e) => {
    setImageReady(false);
    console.log(e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);

    const { data } = await uploadFileService(uploadData);
    console.log("File uploaded :>> ", data);
    setInfo({ ...info, eventImg: data });
    setImageReady(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(info);
    setInfo(initialState);
  };
  const handleFree = (event) => {
    const { checked, name } = event.target;
    if (!checked) {
      setInfo((state) => ({
        ...state,
        price: 0,
      }));
    }
    console.log(checked);
    setFree(checked);
    setInfo((state) => ({
      ...state,
      [name]: checked,
    }));
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
      <label htmlFor="title">Nombre de la Actividad</label>
      <input
        type="text"
        name="title"
        id="title"
        value={info.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Descripción</label>
      <input
        type="textarea"
        name="description"
        id="description"
        value={info.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="category">Escoge el tipo de actividad:</label>
      <select
        name="category"
        id="category"
        value={info.category}
        onChange={handleChange}
        required
      >
        <option disabled={info.direction}>Escoge una opción</option>
        <option value="talleres">Talleres</option>
        <option value="deportes">Deportes</option>
        <option value="exposiciones">Exposiciones</option>
        <option value="Visitas y tours">Visitas y tours</option>
        <option value="infatil">Infatil</option>
        <option value="espectáculos">Espectáculos</option>
        <option value="música">Música</option>
        <option value="quedadas">Quedadas</option>
        <option value="charlas">Charlas</option>
        <option value="otros">Otros</option>
      </select>
      <label htmlFor="date">¿Que día lo organizas?</label>
      <input
        type="date"
        name="date"
        id="date"
        value={info.date}
        onChange={handleChange}
        required
      />
      <label htmlFor="date">¿A que hora sera?</label>
      <input
        type="time"
        name="hour"
        id="hour"
        value={info.hour}
        onChange={handleChange}
        required
      />
      <label htmlFor="date">¿Dónde?</label>
      <input
        type="text"
        name="place"
        id="place"
        value={info.place}
        onChange={handleChange}
        required
      />
      <label htmlFor="free">¿Es gratuita?</label>
      <input
        type="checkbox"
        name="free"
        id="free"
        value={info.title}
        onChange={handleFree}
      />
      {!info.free && (
        <>
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            name="price"
            id="price"
            value={info.price}
            onChange={handleChange}
            required
          />
        </>
      )}
      <label htmlFor="file">Foto de Evento</label>
      <input
        type="file"
        name="file"
        id="file"
        value={info.file}
        onChange={handleUpload}
      />

      <input type="submit" value="Crear Evento" disabled={!imageReady} />
    </form>
  );
};

export default EventForm;
