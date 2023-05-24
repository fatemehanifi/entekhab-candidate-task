import React from "react";
import title from "../title.png";

export default function Header() {
  return (
    <div>
      <div style={{ textAlign: "center", width: "100%" }}>
        <img src={title} alt="logo" width={300} />
      </div>
    </div>
  );
}
