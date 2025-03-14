import React from "react";
import Button from "./Button";

function ButtonList() {
  const list = ["All", "Gaming", "Music", "Cricket", "Poker", "Sports", "Yoga"];
  return (
    <div className="flex">
      {list.map((val) => (
        <Button name={val} key={val} />
      ))}
    </div>
  );
}

export default ButtonList;
