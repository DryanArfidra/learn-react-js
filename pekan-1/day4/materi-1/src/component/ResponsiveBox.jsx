import React from "react";
import "./ResponsiveBox.module.css";

function ResponsiveBox() {
  return (
    <div className="box">
      <h2 className="title">Komponen Responsif</h2>
      <p className="text">
        Ubah ukuran layar untuk melihat perubahan tampilan antara mobile dan desktop.
      </p>
    </div>
  );
}

export default ResponsiveBox;
