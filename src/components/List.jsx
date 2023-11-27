import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./components.css";

export default function List() {
  const [form, setForm] = useState({});
  const [fields, setFields] = useState([]);
  const title = useLocation();
  useEffect(() => {
    switch (title.state.category) {
      case "email":
        setFields([
          { id: "email", fieldTitle: "Электронная почта: " },
          { id: "password", fieldTitle: "Пароль: " },
          { id: "notes", fieldTitle: "Заметки: " },
        ]);
        setForm({ email: "", password: "", notes: "" });
        break;
      case "sites":
        setFields([
          { id: "link", fieldTitle: "Веб-ссылка" },
          { id: "login", fieldTitle: "Логин" },
          { id: "email", fieldTitle: "Электронная почта: " },
          { id: "password", fieldTitle: "Пароль: " },
          { id: "notes", fieldTitle: "Заметки: " },
        ]);
        setForm({
          link: "",
          login: "",
          email: "",
          password: "",
          notes: "",
        });
        break;
      case "networks":
        setFields([
          { id: "network", fieldTitle: "Название" },
          { id: "login", fieldTitle: "Логин" },
          { id: "email", fieldTitle: "Электронная почта: " },
          { id: "password", fieldTitle: "Пароль: " },
          { id: "notes", fieldTitle: "Заметки: " },
        ]);
        setForm({
          network: "",
          login: "",
          email: "",
          password: "",
          notes: "",
        });
        break;
      default:
        setFields([{ id: "titleField", fieldTitle: "Введите название" }]);
        setForm({ titleField: "" });
    }
  }, [title]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <>
      {fields.map((field, index) => (
        <div key={index}>
          <label for={field.id}>{field.fieldTitle}</label>
          <input
            className="input"
            name={field.id}
            id={field.id}
            onChange={changeHandler}
            value={form[field.id]}
          />
        </div>
      ))}
    </>
  );
}
