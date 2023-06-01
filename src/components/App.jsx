import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopup(false);
    setisAddPlacePopup(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopup(true);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="popup__input-container">
            <input
              type="text"
              id="popup__text-name"
              placeholder="Имя"
              name="userName"
              className="popup__text popup__text_type_name"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="popup__text-error popup__text-name-error"></span>
            <input
              type="text"
              id="popup__text-about-oneself"
              placeholder="О себе"
              name="aboutUser"
              className="popup__text popup__text_type_about-oneself"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="popup__text-error popup__text-about-oneself-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <div className="popup__input-container">
            <input
              type="url"
              id="popup__text-avatar-link"
              placeholder="Ссылка на аватар"
              name="avatarLink"
              className="popup__text popup__text_type_avatar-link"
              required
            />
            <span className="popup__text-error popup__text-avatar-link-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="popup__input-container">
            <input
              type="text"
              id="popup__text-place-name"
              placeholder="Название"
              name="placeName"
              class="popup__text popup__text_type_place-name"
              minlength="2"
              maxlength="30"
              required
            />
            <span className="popup__text-error popup__text-place-name-error"></span>
            <input
              type="url"
              id="popup__text-picture-link"
              placeholder="Ссылка на картинку"
              name="imgLink"
              class="popup__text popup__text_type_picture-link"
              required
            />
            <span className="popup__text-error popup__text-picture-link-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="delete"
          buttonText="Да"
        ></PopupWithForm>

        <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups}
        ></ImagePopup>
      </div>
    </div>
  );
}

export default App;
