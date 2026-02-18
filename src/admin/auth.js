// Simple password protection - you can change this password!
const ADMIN_PASSWORD = 'sorrel2026';

export const verifyPassword = (password) => {
  return password === ADMIN_PASSWORD;
};

export const changePassword = (newPassword) => {
  // In a real app, this would save to a database
  // For now, you'll need to manually update the password above
  console.log('Password would be changed to:', newPassword);
  return true;
};