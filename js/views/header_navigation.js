define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    "use strict";

    var NavigationView = Backbone.View.extend({
        events: {
            'click .nav__item': 'loadMovies'
        },

        initialize: function() {
            this.on('current_selected', this.setCurrent, this);
        },

        loadMovies: function(e) {
            var target = $(e.target);
            var routes = Object.keys(TestProject.router.routes);

            var index = this.$el.children().index(target);
            target.trigger('current_selected', index);

            TestProject.router.navigate(routes[index], {trigger: true});
        },

        setCurrent: function(index) {
            var target = this.$el.children(':eq(' + index + ')');

            this.$el.children('.nav__item_selected').removeClass('nav__item_selected')
                .on('click', target, this.loadMovies, this);
            target.addClass('nav__item_selected').off('click');
        }
    });

    return NavigationView;
});