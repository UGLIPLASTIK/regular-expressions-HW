/* eslint-disable no-unused-vars */
export default class Validatator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUserName() {
    const regex1 = /^[A-Za-z][\w-]+[A-Za-z]$/im;
    const regex2 = /\d{3,}/m;
    if (regex1.test(this.nickname) && !regex2.test(this.nickname)) {
      this.validate = true;
      return this.validate;
    }
    throw new Error('Некорректное имя');
  }
}
