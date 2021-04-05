const loginErrors = {
  incorrect: "Вы ввели неправильный логин или пароль.",
  tokenInvalid:
    "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  tokenNotFound:
    "При авторизации произошла ошибка. Переданный токен некорректен.",
};

const registerErrors = {
  conflict: "Пользователь с таким email уже существует.",
  default: "При регистрации пользователя произошла ошибка.",
};

const updateProfileErrors = {
  conflict: "Пользователь с таким email уже существует.",
  default: "При обновлении профиля произошла ошибка.",
};

const defaultErrors = {
  500: "На сервере произошла ошибка.",
  404: "Страница по указанному маршруту не найдена.",
};

const validationErrors = {
  required: "Поле обязательно для заполнения",
  email: "Невалидный email",
  name: "Имя содержит недопустимые символы",
  minLength: "Поле должно содержать не менее 2 символов",
  maxLength: "Поле должно содержать не более 30 символов",
  minLength8: "Поле должно содержать не менее 8 символов",
}

export { loginErrors, registerErrors, updateProfileErrors, defaultErrors, validationErrors };
