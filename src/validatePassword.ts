import {
  MISSING_PASSWORD_ERROR_MSG,
  PASSWORD_MUST_CONTAIN_CAPITAL,
  PASSWORD_MUST_CONTAIN_NUMBERS,
  PASSWORD_MUST_CONTAIN_SPECIAL,
  PASSWORD_SHORT_ERROR_MSG,
} from './index';

export type ValidationResult = {
  valid: boolean;
  message: string;
};

const appendMessage = (validationResult: ValidationResult, message: string) =>
  validationResult.message ? validationResult.message + '\n' + message : message;

export const validatePassword = (password: string) => {
  const result: ValidationResult = {
    valid: true,
    message: '',
  };
  if (!password) {
    throw new Error(MISSING_PASSWORD_ERROR_MSG);
  }

  if (password.length < 8) {
    result.valid = false;
    result.message = appendMessage(result, PASSWORD_SHORT_ERROR_MSG);
  }

  if ((password.match(/\d/g) || []).length < 2) {
    result.valid = false;
    result.message = appendMessage(result, PASSWORD_MUST_CONTAIN_NUMBERS);
  }

  if ((password.match(/[A-Z]/g) || []).length < 1) {
    result.valid = false;
    result.message = appendMessage(result, PASSWORD_MUST_CONTAIN_CAPITAL);
  }

  if ((password.match(/[$&+,:;=?@#|'<>.^*()%!]/g) || []).length < 1) {
    result.valid = false;
    result.message = appendMessage(result, PASSWORD_MUST_CONTAIN_SPECIAL);
  }

  return result;
};
