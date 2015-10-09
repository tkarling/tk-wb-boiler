routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider
        .otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./features/home/home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .state('stylists', {
            url: '/stylists',
            template: require('./features/stylists/stylists.html'),
            controller: 'StylistsController',
            controllerAs: 'stylists'
        })
}