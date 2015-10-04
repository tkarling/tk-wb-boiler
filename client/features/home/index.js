import './home.css';

import angular from 'angular';

import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import greeting    from '../../directives/greeting.directive';

export default angular.module('app.home', [randomNames, greeting])
  .controller('HomeController', HomeController)
  .name;
