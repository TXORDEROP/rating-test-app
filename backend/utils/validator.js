export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePassword = (pwd) =>
  /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/.test(pwd);
export const validateName = (name) => name.length >= 20 && name.length <= 60;
export const validateAddress = (addr) => addr.length <= 400;
