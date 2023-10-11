import Validatator from '../validator';

test('Проверка валидатора', () => {
  const validator = new Validatator('TestNick-12_34-name');

  expect(validator.validateUserName()).toBe(true);
});
