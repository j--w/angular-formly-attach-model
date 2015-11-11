
  import angular from 'angular';
  var formly = require('angular-formly');
  if(ON_TEST) {
    require('angular-mocks/angular-mocks');
  }

  function formlyAttachModel() {
    return {
      require: 'ngModel',
      link: function(scope, el, attrs, ngModelController) {
        scope.options.formControl = ngModelController;
        scope.fc = ngModelController;
      }
    };
  }

  export default angular.module('formlyAttachModel', [formly])
    .directive('formlyAttachModel', formlyAttachModel)
    .name;

    if(ON_TEST) {
      require('./index.test')(angular.module('formlyAttachModel'));
    }

