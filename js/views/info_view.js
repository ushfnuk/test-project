define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/info_template.html'
], function($, _, Backbone, infoTemplate) {
    "use strict";

    var InfoView = Backbone.View.extend({
        className: 'info',

        template: _.template(infoTemplate),

        initialize: function() {
            this.model.on('change', this.render, this);
        },

        render: function() {
            var html = this.template(this.model.toJSON());
            
            this.$el.html(html);
        }
    });

    return InfoView;
});