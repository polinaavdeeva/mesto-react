import React from "react";

function PopupWithForm({ title, name, buttonText, children, isOpen }) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <form
          className={`popup__form popup__${name}-form`}
          name="editForm"
          novalidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__save-button">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
