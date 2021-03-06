requirejs.config({
    baseUrl: 'js/',
    paths: {
        /******************* libs *****************/
        jquery: 'libs/jquery.min',
        underscore: 'libs/underscore-min',
        mustache: 'libs/mustache.min',
        bootstrap: 'libs/bootstrap.min',
        jCookie: 'libs/jquery.cookie',
        /******************* utils *****************/
        helper: 'util/helper',
        url: 'util/url'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        jCookie: {
            deps: ['jquery'],
            exports: 'jCookie'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

require(['jquery', 'underscore', 'mustache', 'bootstrap', 'jCookie'], function($, _, mustache, bootstrap, jCookie) {
    (function() {
        var dataStart = $('script[data-main][data-start]').attr('data-start') || '';
        var startModules = dataStart.split(',');

        _.each(startModules, function(module) {
            require([module], function(moduleObj) {
                if (moduleObj && moduleObj.init) {
                    moduleObj.init();
                }
            });
        });
    })();
});