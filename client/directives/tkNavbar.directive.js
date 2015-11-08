//import './greeting.scss';

function tkNavbar() {
    return {
        restrict: 'E',
        scope: {
            items: '='
        },
        //transclude: true,
        template: '<div class="navbar navbar-default">' +
            '<div class="container-fluid">' +
                '<div class="navbar-header">' +
                    '<button ng-init="isCollapsed=true" class="navbar-toggle btn btn-navbar"' +
                        'ng-click="isCollapsed = !isCollapsed" data-target="#bs-example-navbar-collapse-1"' +
                        'aria-expanded="false">' +
                        '<span class="icon-bar"></span>' +
                        '<span class="icon-bar"></span>' +
                        '<span class="icon-bar"></span>' +
                    '</button>' +
                    '<a class="navbar-brand" href="#">Boiler</a>' +
                '</div>' +
                '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
                    '<ul class="nav navbar-nav">' +
                        '<li ng-repeat="item in items" ng-class="{active: activeI === $index}" ng-click="updateActive($index)"><a href="{{item.link}}">{{item.name}}</a></li>' +
                    '</ul>' +
                '</div>' +
                '<div class="nav-collapse" uib-collapse="isCollapsed">' +
                    '<ul class="nav">' +
                        '<li ng-repeat="itema in items" ng-click="closeMenu()"><a href="{{itema.link}}">{{itema.name}}</a></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>',
        link: function(scope, element, attr) {
            scope.activeI = 0;
            //console.log("items", scope.items);

            //scope.$watch(() => {return scope.isCollapsed}, () => {
            //   console.log("scope.isCollapsed", scope.isCollapsed);
            //});

            scope.closeMenu = () => {
                scope.isCollapsed = true;
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
