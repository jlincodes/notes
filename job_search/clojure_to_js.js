// user=> (def m {:username "sally"
//                :profile {:name "Sally Clojurian"
//                          :address {:city "Austin" :state "TX"}}})
// #'user/m
//
// user=> (get-in m [:profile :name])
// "Sally Clojurian"
// user=> (get-in m [:profile :address :city])
// "Austin"
// user=> (get-in m [:profile :address :zip-code])
// nil
// user=> (get-in m [:profile :address :zip-code] "no zip code!")
// "no zip code!"

const m = { username: 'sally',
            profile: {
              name: 'Sally Clojurian',
              address: {
                city: 'Austin',
                state: 'TX'
              }
            }
          };


const getIn = (obj, path, notFound=null) => {
  // Naive Approach:

  // let temp = obj;
  // for (let i = 0; i < path.length; i++) {
  //   // console.log(path[i]);
  //   temp = temp[path[i]];
  // }
  // return (typeof temp === 'undefined') ? notFound : temp;

  // Refactored using recursion:

  if (path.length === 0) {
    return (typeof obj === 'undefined') ? notFound : obj;
  }

  let firstPath = path.shift();
  return getIn(obj[firstPath], path, notFound);
};

console.log(getIn(m, ['profile', 'address', 'zipcode'], 'no zip code!')); // => 'Sally Clojurian'
