const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);


console.log(flatten([1, [11, 22], [[111, 222, 333], 44]]))