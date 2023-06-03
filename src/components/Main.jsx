import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  const cardsItems = cards.map((card) => <Card key={card._id} card={card} onCardClick={onCardClick}></Card>);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitalCards()])
      .then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-update">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватарка профиля"
          />
          <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__info-title">{userName}</h1>
            <button
              className="profile__edit-button"
              onClick={onEditProfile}
              type="button"
            ></button>
          </div>
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={onAddPlace}
          type="button"
        ></button>
      </section>
      <section className="elements" aria-label="Места">
        <ul className="elements__items">{cardsItems}</ul>
      </section>
    </main>
  );
}

export default Main;
