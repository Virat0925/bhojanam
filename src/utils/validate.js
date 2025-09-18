

export const formValidation = (email, phoneNumber, username, password) => {
  const isPhoneNumberValid = /^(?:\+91|0)?[6-9]\d{9}$/.test(phoneNumber);
  const isNameValid = /^[a-zA-Z][a-zA-Z0-9._]{2,14}$/.test(username);
  const isEmailValid = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,7}$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  // if (!isPhoneNumberValid) return "Number is not valid";
  // if (!isNameValid) return "Enter a valid Username";
  if (!isEmailValid) return "Invalid email address";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

