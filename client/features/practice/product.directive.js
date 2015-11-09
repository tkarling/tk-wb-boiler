import './practice.scss';

function product() {
    return {
        restrict: 'E',
        scope: {
            name: '@'
        },
        template:
            '<div class="greeting">Directive: Hello, {{name}}</div>' +
            //'<uib-rating ng-model="rate" max="max" readonly="readOnly"' +
                //'rating-states="ratingStates"' +
            //'></uib-rating>'
            "",
        link: function(scope, element, attr) {
            scope.max= 5;
            scope.rate = 4;
            scope.readOnly = false;
            //
            //scope.ratingStates = [
            //    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            //    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            //    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            //    {stateOn: 'glyphicon-heart'},
            //    {stateOff: 'glyphicon-off'}
            //];
        }

    }
}

export default angular.module('directives.product', [])
    .directive('product', product)
    .name;
