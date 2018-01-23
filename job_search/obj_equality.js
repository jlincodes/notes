// Compare two objects

const isEqual = (objA, objB) => {
  if (Object.keys(objA).length !== Object.keys(objB).length) return false;

  for (let prop in objA) {
    if (objB.hasOwnProperty(prop.toString()) === false) {
      return false;
    }
    if (typeof objA[prop] === 'object' && typeof objB[prop] === 'object') {
      return isEqual(objA[prop], objB[prop]);
    }
    if (objA[prop] !== objB[prop]) {
      console.log(prop);
      return false;
    }
  }
  return true;
};

const sally1 = {
  name: 'Sally',
  age: 28,
  location: 'San Francisco'
};

const sally2 = {
  name: 'Sally',
  age: 28,
  location: 'San Francisco'
};

const mae = {
  name: 'Mae',
  age: 28,
  location: 'San Francisco'
};

const sally3 = {
  username: 'sally',
  profile: {
    name: 'Sally',
    age: 28,
    location: 'San Francisco'
  }
};

const sally4 = {
  username: 'sally',
  profile: {
    name: 'Sally',
    age: 28,
    location: 'San Francisco'
  }
};

const mae1 = {
  username: 'mae',
  profile: {
    name: 'Mae',
    age: 28,
    city: 'San Francisco'
  }
};

const mae2 = {
  username: 'mae',
  profile: {
    name: 'Mae',
    age: 27,
    city: 'Seattle'
  }
};

const mae3 = {
  username: 'mae',
  profile: {
    name: 'Mae',
    age: 28,
    location: 'San Francisco'
  },
  favoritePet: undefined
};

const mae4 = {
  username: 'mae',
  profile: {
    name: 'Mae',
    age: 28,
    location: 'San Francisco'
  },
  favoriteFood: 'pizza'
};

// console.log(isEqual(sally1, sally2)); // returns true
// console.log(isEqual(sally1, mae)); // returns false
// console.log(isEqual(sally3, sally4)); // returns true
// console.log(isEqual(mae1, mae2)); // returns false
console.log(isEqual(mae3, mae4)); // returns true
