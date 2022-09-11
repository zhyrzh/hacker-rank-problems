module.exports.appendAndDelete = function (s, t, k) {
  let i;
  for (i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      break;
    }
  }

  let deletesRequired = s.length - i;
  let appendsRequired = t.length - i;
  let minRequired = deletesRequired + appendsRequired;
  let maxLength = s.length + t.length;

  if (k < minRequired || (k % 2 !== minRequired % 2 && k < maxLength)) {
    return "No";
  } else {
    return "Yes";
  }
};
