import React from "react";

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-update">
          <img className="profile__avatar" src="#" alt="Аватарка профиля" />
          <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__info-title"></h1>
            <button className="profile__edit-button" onClick={onAddPlace} type="button"></button>
          </div>
          <p className="profile__info-subtitle"></p>
        </div>
        <button className="profile__add-button" onClick={onEditProfile} type="button"></button>
      </section>
      <section className="elements" aria-label="Места">
        <ul className="elements__items">
          <template id="place-template">
            <li className="elements__item">
              <button className="elements__reset-button"></button>
              <img className="elements__image" src="#" alt="#" />
              <div className="elements__title-container">
                <p className="elements__title"></p>
                <div className="elements__like-info">
                  <button className="elements__like"></button>
                  <p className="elements__like-nums"></p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}

export default Main;
