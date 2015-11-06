
  import angular from 'angular';
  var formly = require('angular-formly');

  function formlyAttachModel() {
    return {
      require: 'ngModel',
      link: function(scope, el, attrs, ngModelController) {
        scope.options.formControl = ngModelController;
        scope.fc = ngModelController;
      }
    };
  }

  export default angular.module('formlyAttachModel', [])
    .directive('formlyAttachModel', formlyAttachModel)
    .name;

