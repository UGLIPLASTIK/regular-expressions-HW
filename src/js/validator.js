/* eslint-disable no-unused-vars */
export default class Validatator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUserName() {
    const regex = /(\d{3,})|((?=[\W])[^-_])|^[\d|\W]|[\d|\W]$/;
    if (this.validate === true) return;
    if (!regex.test(this.nickname)) {
      this.validate = true;
    } else {
      throw new Error('Некорректное имя');
    }
  }
}
