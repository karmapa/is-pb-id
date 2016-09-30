module.exports = function isPbId(str) {
  str = str || '';
  return !! str.match(/^\d+\-\d+\-\d+[abcde]$/);
};
