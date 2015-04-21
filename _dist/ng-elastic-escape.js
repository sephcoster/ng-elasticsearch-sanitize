(function () { 'use strict'; angular.module('lx.escapeElastic', []).service('escapeElastic', function () {
  var regexString,
    regex;
  return function (query) {
    query = query
      .replace(/([-!(){}\[\]^"~*?:\+\/\\])/g, '\\$1') // replace single character special characters
      .replace(/(\|\|)/g, '\\$1') // replace ||
      .replace(/(\&\&)/g, '\\$1'); // replace &&
    _.map(['AND', 'OR', 'NOT'], function (operator) {
      regexString = 's*\\b(' + operator + ')\\b\\s*'
      regex = new RegExp(regexString, 'g');
      query = query.replace(regex, 
        _.map(operator.split(''), 
          function (ch) {
            return '\\' + ch;
          }
        ).join('') +' '
      )
    });
    return query;
  };
});}());