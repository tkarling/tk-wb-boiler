import './stylists.css';

import StylistsController from './stylists.controller';

export default angular.module('app.stylists', [])
    .controller('StylistsController', StylistsController)
    .name;

