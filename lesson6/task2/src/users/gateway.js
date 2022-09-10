const baseUrl = 'https://api.github.com/users/';

export function getUserData(user) {
  return fetch(baseUrl + user).then(response => response.json());
}
