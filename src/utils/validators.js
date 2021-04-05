export const validators = {
  name: {
    required: (value, isValidationStart) => {
      return isValidationStart && value === "";
    },
    minLength: (value, isValidationStart) => {
      return isValidationStart && value.length < 2;
    },
    maxLength: (value, isValidationStart) => {
      return isValidationStart && value.length > 30;
    },
    containSymbols: (value, isValidationStart) => {
      return isValidationStart && !/^[_a-zёЁа-яА-Я'][_a-zёЁа-яА-Я-' ]+[_a-zёЁа-яА-Я']?$/gi.test(
        value
      );
    },
  },
  email: {
    required: (value, isValidationStart) => {
      return isValidationStart && value === "";
    },
    invalidEmail: (value, isValidationStart) => {
      return isValidationStart && !/[\w]+@[a-z.]+/gi.test(value, isValidationStart);
    },
  },
  password: {
    required: (value, isValidationStart) => {
      return isValidationStart && value === "";
    },
    minLength: (value, isValidationStart) => {
      return isValidationStart && value.length < 8;
    },
    maxLength: (value, isValidationStart) => {
      return isValidationStart && value.length > 30;
    },
  },
};

export const inputValidator = (value, inputType, isValidationStart) => {
  return Object.keys(validators[inputType])
    .map((errorKey) => {
      const errorResult = validators[inputType][errorKey](
        value,
        isValidationStart
      );

      return { [errorKey]: errorResult };
    })
    .reduce((acc, el) => ({ ...acc, ...el }), {});
};
