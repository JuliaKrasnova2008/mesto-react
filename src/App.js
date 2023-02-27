import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagePopup from "./components/ImagePopup";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        formName="myForm"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_type_name"
          id="input-userName"
          name="userName"
          type="text"
          placeholder="Имя"
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error input-userName-error"></span>
        <input
          className="form__input form__input_type_about"
          id="input-aboutUser"
          name="aboutUser"
          type="text"
          placeholder="О себе"
          autoComplete="off"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error input-aboutUser-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add"
        formName="addForm"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_type_title-add"
          id="input-titleForm"
          name="titleForm"
          type="text"
          placeholder="Название"
          autoComplete="off"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__input-error input-titleForm-error"></span>
        <input
          className="form__input form__input_type_link-add"
          id="input-linkForm"
          name="linkForm"
          type="url"
          placeholder="Ссылка на изображение"
          autoComplete="off"
          required
        />
        <span className="form__input-error input-linkForm-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        formName="deleteForm"
        buttonText="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        name="avatar"
        formName="avatar"
        buttonText="Сохранить"
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_type_link-add"
          id="input-avatarForm"
          name="linkForm"
          type="url"
          placeholder="Ссылка на аватар"
          autoComplete="off"
          required
        />
        <span className="form__input-error input-avatarForm-error">hgh</span>
      </PopupWithForm>
    </div>
  );
}

export default App;
