define([
    'jquery',
    'backbone',
    'models/movie'
], function($, Backbone, Movie) {
    "use strict";

    var MoviesList = Backbone.Collection.extend({
        model: Movie,

        initialize: function() {
            this.on('remove', this.hideModel);
        },

        hideModel: function(model) {
            model.trigger('hide');
        }
    });

    return MoviesList;
});