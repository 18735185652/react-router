let { pathToRegexp } = require('path-to-regexp');

let keys = [];
let regexp = pathToRegexp('/user/:id/:name', keys, { end: false, sensitive: true, strict: false });
// console.log('regexp: ', regexp);
let result = '/user/100/zhufeng'.match(regexp);

// console.log('result: ', result);
// console.log('keys', keys);

let paramsNames = keys.map(key => key.name)
let values = result.slice(1);
let params = paramsNames.reduce((memo, key, index) => {
    memo[key] = values[index];
    return memo
}, {})
// console.log('params', params);

// match.params = { id: '100', name: 'zhufeng' }




let aa = pathToRegexp('/user', keys, { end: false, sensitive: false, strict: false });


console.log('regexp: ', '/user/aa'.match(aa));