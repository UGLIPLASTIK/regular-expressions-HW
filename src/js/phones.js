/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default function formatPhone(phone) {
  const result = phone.replace(/[-,\s()]/g, '');
  return result.replace(/(^)(^\d)/g, (match, startNum, num) => `${startNum = '+'}${Number(num) - 1}`);
}
