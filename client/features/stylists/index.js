import './stylists.scss';

import StylistsController from './stylists.controller';
import randomNames from '../../services/randomNames.service';
import greeting from '../../directives/greeting/greeting.directive.js';

export default angular.module('app.stylists', [randomNames, greeting])
    .controller('StylistsController', StylistsController)
    .name;

