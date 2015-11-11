export default ngModule => {

  describe('attach-model', () => {
    let $compile, scope, el, node, formlyConfig, $q, isolateScope, field, $timeout;
    beforeEach(window.module(ngModule.name));
    beforeEach(inject((_$compile_, _formlyConfig_, _$timeout_, $rootScope) => {
      formlyConfig = _formlyConfig_;
      $compile = _$compile_;
      $timeout = _$timeout_;
      scope = $rootScope.$new();
      scope.model = {};
      scope.fields = [];
    }));

    
    it('no formControl when using formly-skip-ng-model-attrs-manipulator and no name attribute without attach-model', function() {
      formlyConfig.setType({
        name: 'text', template: '<input ng-model="model[options.key]" formly-skip-ng-model-attrs-manipulator/>'
      });
      var field = {
          type: 'text',
          key: 'text',
          templateOptions: {
            label: 'Whatever'
          }
        };
      scope.fields = [field];
      scope.formData = {};
      var template = '<formly-form model="formData" fields="fields"></formly-form>';
      el = $compile(template)(scope);
      scope.$digest();
      expect(field.formControl).to.not.exist;
    });

    it('attachformControl when using formly-skip-ng-model-attrs-manipulator and no name attribute with attach-model', function() {
      formlyConfig.setType({
        name: 'text', template: '<input ng-model="model[options.key]" formly-skip-ng-model-attrs-manipulator formly-attach-model/>'
      });
      var field = {
          type: 'text',
          key: 'text',
          templateOptions: {
            label: 'Whatever'
          }
        };
      scope.fields = [field];
      scope.formData = {};
      var template = '<formly-form model="formData" fields="fields"></formly-form>';
      el = $compile(template)(scope);
      scope.$digest();
      expect(field.formControl).to.exist;
    });

    // it('should be possible to use it as an attribute directive', () => {
    //   console.log('test test test!');
    // }
  });
}