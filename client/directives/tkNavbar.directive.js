//import './greeting.scss';

function tkNavbar($window) {
    return {
        restrict: 'E',
        scope: {
            items: '='
        },
        //transclude: true,
        template: '<div class="navbar navbar-default">' +
            '<div class="container-fluid">' +
                '<div class="navbar-header">' +
                    '<button class="navbar-toggle btn btn-navbar"' +
                        'ng-click="isCollapsed = !isCollapsed" data-target="#bs-example-navbar-collapse-1"' +
                        'aria-expanded="false">' +
                        '<span class="icon-bar"></span>' +
                        '<span class="icon-bar"></span>' +
                        '<span class="icon-bar"></span>' +
                    '</button>' +
                    '<a class="navbar-brand" href="#">Boiler</a>' +
                '</div>' +
                '<div class="nav-collapse" uib-collapse="isCollapsed">' +
                    '<ul class="nav navbar-nav">' +
                        '<li ng-repeat="itema in items" ng-click="closeMenu()"><a href="{{itema.link}}">{{itema.name}}</a></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>',
        link: function(scope, element, attr) {
            var COLLAPSE_WINDOW_WIDTH = 768;
            scope.isCollapsed = $window.innerWidth < COLLAPSE_WINDOW_WIDTH;

            var w = angular.element($window);
            w.bind('resize', function(){
                //console.log("$window.resize", $window.innerWidth);
                scope.$apply(function() {
                    scope.isCollapsed = $window.innerWidth < COLLAPSE_WINDOW_WIDTH;
                });
            });

            scope.$on("$destroy",function (){
                console.log("on destroy");
                w.unbind('resize');
            });

            scope.closeMenu = () => {
                scope.isCollapsed = $window.innerWidth < COLLAPSE_WINDOW_WIDTH;
            }
            scope.updateActive = (index) => {
                scope.activeI =index;
            }
        }
    }
}

export default angular.module('directives.tkNavbar', [])
    .directive('tkNavbar', tkNavbar)
    .name;
