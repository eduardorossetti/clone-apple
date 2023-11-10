import React from "react";
import { Header, ItemHeader, TextHeader } from "./AppStyled";
import "./fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Header>
        <ItemHeader>
          <FontAwesomeIcon
            style={{ color: "#f5f5f7", fontSize: "18px" }}
            icon={faApple}
          />
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Mac</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>iPad</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>AirPods</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Só na Apple</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Suporte</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#f5f5f7", fontSize: "14px", opacity: ".8" }}
          />
        </ItemHeader>
        <ItemHeader>
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{ color: "#f5f5f7", fontSize: "14px", opacity: ".8" }}
          />
        </ItemHeader>
      </Header>
    </>
  );
}

export default App;
