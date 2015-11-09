routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider
        .otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
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
        .state('practice', {
            url: '/practice',
            template: require('./features/practice/practice.html'),
            controller: 'PracticeController',
            controllerAs: 'practice'
        })
}