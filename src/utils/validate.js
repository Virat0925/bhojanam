

export const formValidation = (email, phoneNumber,username) => {
  const isPhoneNumberValid = /^(?:\+91|0)?[6-9]\d{9}$/.test(phoneNumber);
  const isNameValid = /^[a-zA-Z][a-zA-Z0-9._]{2,14}$/.test(username);
  const isEmailValid = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,7}$/.test(email);

  if (!isPhoneNumberValid) return "Number is not valid";
  if (!isNameValid) return "Enter a valid Username";
  if (!isEmailValid) return "Invalid email address";

  return null;
};

