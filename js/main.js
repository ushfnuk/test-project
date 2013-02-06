require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery-1.9.0',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'text': 'libs/text',
        'application': 'application'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'application': {
            deps: ['text', 'jquery', 'underscore', 'backbone'],
            exports: 'AppRouter'
        }
    },
    waitSeconds: 10
});

var TestProject = {};

require([
    'jquery',
    'backbone',
    'application'
], function($, Backbone, AppRouter) {
    "use strict";

    $(document).ready(function() {
        AppRouter.init();
        TestProject.router = AppRouter;
    });
});