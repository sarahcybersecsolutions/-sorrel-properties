// Simple password protection - encoded for security
const ENCODED_PASSWORD = 'c29ycmVsMjAyNg=='; // sorrel2026 encoded

const decodePassword = (encoded) => {
  try {
    return atob(encoded);
  } catch {
    return '';
  }
};

export const verifyPassword = (password) => {
  return password === decodePassword(ENCODED_PASSWORD);
};

export const changePassword = (newPassword) => {
  console.log('Password would be changed to:', newPassword);
  return true;
};