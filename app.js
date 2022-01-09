// npm --version

//local dependency in a particular project
//npm i <packageName>

//global dependency to use in any project
//npm install -g <packageName>

//package.json - manifest file that stores important info about project/package
//npm init
//npm init -y

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);

console.log("Hello world")










