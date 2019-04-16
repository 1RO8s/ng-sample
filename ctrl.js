angular.module('sampleModule', []).controller('sampleController', function() {
  this.message = 'これはメッセージです';
  this.users = [
    {"name":"AAA", "age":15},
    {"name":"BBB", "age":25},
    {"name":"CCC", "age":35},
    {"name":"DDD", "age":45},
  ];
});
