import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { NameContext } from "../../contexts/name";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import "./style.css";

export default function Home() {
  const { name, setName } = useContext(NameContext);
  const navigate = useNavigate();

  return (
    <>
      <h1>Pesquisando por: {name}</h1>

      <div className="inputs-row">
        <div className="input-box">
          <MyInput label="Digite aqui..." setValue={setName} />
        </div>
        <MyButton
          className="single"
          value="Pesquisar"
          action={() => navigate("/search")}
        />
      </div>
    </>
  );
}
