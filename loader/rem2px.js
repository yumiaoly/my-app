const loaderUtils = require('loader-utils');
const validateOptions  = require('schema-utils');
console.log(loaderUtils)
module.exports  = function(source){
    // const options = loaderUtils.getOptions(this);

    console.log({ source})
    return source;
}