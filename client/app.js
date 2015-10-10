import angular from 'angular';
import uirouter from 'angular-ui-router';

import './app.scss';
import routes from './app.routes';
import home from './features/home';
import stylists from './features/stylists';

angular.module('app', [uirouter, home, stylists])
  .config(routes);
