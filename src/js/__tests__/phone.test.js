import formatPhone from '../phones';

test('Форматирование номеров', () => {
  const expected = '+86 000 000 0000';
  const correct = '+860000000000';
  expect(formatPhone(expected)).toEqual(correct);
});
