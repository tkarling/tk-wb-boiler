import './practice.scss';

import PracticeController from './practice.controller';
import product from './product.directive';

export default angular.module('app.practice', [product])
    .controller('PracticeController', PracticeController)
    .name;

