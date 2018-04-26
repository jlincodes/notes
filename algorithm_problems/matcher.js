function nameMatcher(knownAliases, name) {
  const nameArr = name.split(' ');

  for (let i = 0; i < knownAliases.length; i++) {

    const alias = knownAliases[i];
    const aliasArr = alias.split(' ');

    if (nameArr.length === 2 || aliasArr.length === 2) {
      return (isMatch(aliasArr[0], nameArr[0])
        && isMatch(aliasArr[aliasArr.length - 1], nameArr[nameArr.length -1]));
    } else if (nameArr.length === 3 && aliasArr.length === 3) {
      if (isMatch(alias, name)) return true;
      if (isMatch(aliasArr[0], nameArr[0]) &&
          isMatch(aliasArr[aliasArr.length - 1], nameArr[nameArr.length -1]) &&
          checkMiddle(aliasArr[1], nameArr[1])) {
          return true;
      }
    }
  }

  return false;
}

function isMatch(alias, name) {
  return (new RegExp(name, 'i')).test(alias);
}

function checkMiddle(aliasMid, nameMid) {
  if (aliasMid.length === 1 || nameMid.length === 1) {
    return isMatch(aliasMid.slice(0,1), nameMid.slice(0,1));
  }
}

function assertEqual(expected, result, errorMsg) {
  if (result !== expected) {
    console.log(errorMsg);
    console.log(`expect: ${expected}`);
    console.log(`actual: ${result}`);
    console.log('');
  }
}
