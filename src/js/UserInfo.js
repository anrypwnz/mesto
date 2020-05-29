export class UserInfo {
  constructor(name, job, avatar) {
    this.setUserInfo(name, job, avatar);
    this.updateUserInfo();

  }
  setUserInfo(name, job, avatar) {
    this.name = name;
    this.job = job;
    this.avatar = avatar;
  }

  updateUserInfo() {
    document.querySelector(".user-info__name").textContent = this.name;
    document.querySelector(".user-info__job").textContent = this.job;
    document.querySelector(".user-info__photo").style.backgroundImage = `url(${this.avatar})`;
  }
}
