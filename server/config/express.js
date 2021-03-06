// EXPRESS CONFIGURATION FILE
var config = require('./config'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    webpack = require('webpack'),
    webpackConfig = require('../../webpack.config'),
    webpackMiddleware = require('webpack-dev-middleware'),
    ejs = require('ejs');


module.exports = function () {
    // generates the app object
    var app = express();


    // here we set our templating engine
    // route is relative to server.js
    app.set('views', './server/views');
    app.set('view engine', 'ejs');


    // this middleware will run no matter the environment
    app.use(cors());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    // Environment-dependant middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

        app.use(webpackMiddleware(webpack(webpackConfig), {
            inline: true,
            publicPath: '/dist/'
        }));
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }


    // cookie support
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // passport auth
    //require('./passport.js')(app);


    // HERE WE INCLUDE THE ROUTES
    require('../routes/pic.server.routes.js')(app);


    // THIS WILL BE ANGULAR APP
    // needs to come after setting the rendering engine
    app.use(express.static('./client'));

    return app;
};