export class Api {
  constructor(url, token) { 
    this.baseUrl = url;
    this.token = token;
  }

  getUserInfo(param) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res); 
        param(res.name, res.about, res.avatar);

      })
      .catch(err => console.log(err));
  }
  loadCards(param) {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => res.json())
      .then(res => {
        param.render(res);
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  updateUserInfo(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}