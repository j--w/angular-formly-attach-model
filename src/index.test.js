export default ngModule => {

  describe('attach-model', () => {
    let $compile, scope, el, formlyConfig, field, template;
    beforeEach(window.module(ngModule.name));
    beforeEach(inject((_$compile_, _formlyConfig_, _$timeout_, $rootScope) => {
      formlyConfig = _formlyConfig_;
      $compile = _$compile_;
      scope = $rootScope.$new();
      scope.model = {};
      field = {
          type: 'text',
          key: 'text'
        };
      scope.fields = [field];
      template = '<formly-form model="model" fields="fields"></formly-form>';
    }));

    
    it('should NOT attach formControl when using formly-skip-ng-model-attrs-manipulator and no name attribute', function() {
      formlyConfig.setType({
        name: 'text', template: '<input ng-model="model[options.key]" formly-skip-ng-model-attrs-manipulator/>'
      });
      
      el = $compile(template)(scope);
      scope.$digest();
      
      expect(field.formControl).to.not.exist;
    });

    it('should attach formControl when using formly-skip-ng-model-attrs-manipulator and no name attribute WITH attach-model', function() {
      formlyConfig.setType({
        name: 'text', template: '<input ng-model="model[options.key]" formly-skip-ng-model-attrs-manipulator formly-attach-model/>'
      });
      var template = '<formly-form model="model" fields="fields"></formly-form>';
      el = $compile(template)(scope);
      scope.$digest();
      
      expect(field.formControl).to.exist;
    });
    
  });
}