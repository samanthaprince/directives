var app = angular.module('app', []);

app.directive('dog', function(){
  return {
    restrict: 'E',
    scope: {
      name: '=',
      age: '=',
      hobby: '='
    },
    replace: true,
    template: '<section> Hi my name is {{name}} the dog. I am {{age}} years old and my favorite activity is {{hobby}}.</section>'
  };
});

app.directive('human', function(){
  return {
    restrict: 'E',
    scope: {
      name: '=',
      occupation: '='
    },
    replace: true,
    template: '<div> Name: {{name}} | Occupation: {{occupation}}</div>'
  };
});

app.directive('addLine', function(){
  return {
    scope: {},
    restrict: 'A',
    link: function($scope, element, attrs){
      element.on('click', function() {
        element.css('border', 'solid');
      });
    }
  };
});

app.directive('popUp', function () {
  return {
    restrict: 'E',
    scope: {
      fn : '&fn'
    },
    template: '<div><input type="text" ng-model="value"/> <button class="button" ng-click="fnclicked({message:value})">Click Here</button> </div>',
    controller: function($scope) {
      $scope.fnclicked = function(value) {
        alert(value);
      };
    }
  };
});

app.directive('multiply', function(){
  return {
    restrict: 'E',
    scope: {
      number1: '='
    },
    replace: true,
    template: '<section> Multiple {{number1}} by 10 <button ng-click="timesTen()">multiply 10</button></section>',
    controller: function($scope) {
      $scope.timesTen = function() {
        $scope.number1 *= 10;
      };
    }
  };
});

app.directive('clock', function($interval, $filter) {
  var date = Date.now(), interval;
  var dateFilter = $filter('date');
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      function tick() {
        element.text(dateFilter(new Date(), 'hh:mm:ss a'));
      }
      interval = $interval(tick, 10);
      scope.$on('unload', function() {
        $interval.cancel(interval);
      });
    }
  };
});
