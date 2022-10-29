export const getAuthToken = () => {
  try {
    const authToken = localStorage.getItem('token');
    return authToken;
  } catch (err) {
    return null;
  }
};
