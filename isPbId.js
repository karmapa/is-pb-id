module.exports = function isPbId(str) {
  return /^\d+\-\d+\-\d+[abcde]$/.test(str);
};
