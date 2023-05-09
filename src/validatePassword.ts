import { MISSING_PASSWORD_ERROR_MSG, PASSWORD_SHORT_ERROR_MSG } from './index';

export type ValidationResult = {
  valid: boolean;
  message?: string;
};
export const validatePassword = (password: string) => {
  const result: ValidationResult = {
    valid: false,
  };
  if (!password) {
    throw new Error(MISSING_PASSWORD_ERROR_MSG);
  }

  if (password.length < 8) {
    result.message = PASSWORD_SHORT_ERROR_MSG;
  }

  return result;
};
