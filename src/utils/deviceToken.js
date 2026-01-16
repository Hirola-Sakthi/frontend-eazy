const DEVICE_TOKEN_KEY = 'cms_device_token';

export const generateDeviceToken = () => {
  const navigator = window.navigator;
  const screen = window.screen;

  const components = [
    navigator.userAgent,
    navigator.language,
    screen.colorDepth,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    !!window.sessionStorage,
    !!window.localStorage,
  ];

  const fingerprint = components.join('###');

  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);

  return btoa(`${fingerprint}-${timestamp}-${random}`).substring(0, 64);
};


export const getDeviceToken = () => {
  try {
    let token = localStorage.getItem(DEVICE_TOKEN_KEY);

    if (!token) {
      token = generateDeviceToken();
      localStorage.setItem(DEVICE_TOKEN_KEY, token);
    }

    return token;
  } catch (error) {
    console.error('Error getting device token:', error);
    return generateDeviceToken();
  }
};


export const clearDeviceToken = () => {

  try {
    localStorage.removeItem(DEVICE_TOKEN_KEY);
  } catch (error) {
    console.error('Error clearing device token:', error);
  }
  
};

export default {
  generateDeviceToken,
  getDeviceToken,
  clearDeviceToken
};
