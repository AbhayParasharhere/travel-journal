import React from "react";
import Card from "./components/card";
import data from "./data";
import "./style.css";

export default function App() {
  const all_cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return <div>{all_cards}</div>;
}
