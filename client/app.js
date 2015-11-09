import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
var uibs = require('angular-ui-bootstrap');

import './app.scss';
import routes from './app.routes';
import home from './features/home';
import stylists from './features/stylists';
import practice from './features/practice';
import tkNavbar from './directives/tkNavbar.directive.js';


angular.module('app', [uirouter, uibs, home, stylists, practice, tkNavbar])
  .config(routes);
