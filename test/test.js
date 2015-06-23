(function () {
  'use strict';

  describe('String Escaper', function () {
    var esc,
      result;

    describe('escapes strings correctly', function () {
      beforeEach(function () {
        module('lx.escapeElastic');
        inject(function (escapeElastic) {
          esc = escapeElastic;
        });
      });

      it('checks the string to actually get escaped', function () {
        result = esc('[-!(){}]^"~*?:+/||\\&& AND OR NOT "Test Vehicle"~5');
        expect(result).to.eql('\\[\\-\\!\\(\\)\\{\\}\\]\\^"~\\*\\?\\:\\+\\/\\||\\\\\\&& \\A\\N\\D \\O\\R \\N\\O\\T "Test Vehicle"~5');
      });
    });
  });
}());