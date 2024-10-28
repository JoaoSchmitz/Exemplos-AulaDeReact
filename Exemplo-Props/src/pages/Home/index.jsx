import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState();

  return (
    <>
      <h1>Pesquisando por: {searchItem}</h1>

      <div className="inputs-row">
        <div className="input-box">
          <MyInput
            label="Digite aqui..."
            setValue={setSearchItem}
          />
        </div>
        <MyButton
          className="single"
          value="Pesquisar"
          action={() =>
            navigate("/search", {
              state: { searchItem: searchItem },
            })
          }
        />
      </div>
    </>
  );
}
