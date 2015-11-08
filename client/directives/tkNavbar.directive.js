//import './greeting.scss';

function tkNavbar() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<div>Directive: Hello, {{name}}</div>'
  }
}

export default angular.module('directives.tkNavbar', [])
  .directive('tkNavbar', tkNavbar)
  .name;
