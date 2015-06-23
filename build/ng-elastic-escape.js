(function () { 'use strict'; var angular = require('angular'); var _ = require('lodash'); module.exports = angular.module('lx.escapeElastic', []).service('escapeElastic', function () {
  var regexString,
    regex;
  return function (query) {
    query = query
      .replace(/([-!(){}\[\]^?:\+\/\\])/g, '\\$1') // replace single character special characters
      // Do not replace asterisk, double quote, or tilde because those are required for Lucene 
      // QueryStringQuery syntax to function properly.
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