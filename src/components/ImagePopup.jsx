import React from "react";

function ImagePopup() {
  return (
    <section className="popup popup_type_image-zoom">
      <div className="popup__image-container">
        <button className="popup__close-button"></button>
        <img className="popup__image" src="#" alt="#" />
        <p className="popup__description"></p>
      </div>
    </section>
  );
}

export default ImagePopup;
