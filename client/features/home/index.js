import './home.scss';

import HomeController from './home.controller';

export default angular.module('app.home', [])
  .controller('HomeController', HomeController)
  .name;
