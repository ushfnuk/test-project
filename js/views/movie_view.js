define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/slider_anchor.html'
], function($, _, Backbone, anchor) {
    "use strict";

    var MovieView = Backbone.View.extend({
        tagName: 'li',
        className: 'slider-covers__item',
        
        events: {
            'click .slider-covers__anchor': 'showInfo'
        },

        template: _.template(anchor),

        initialize: function() {
            this.model.on('change', this.render, this);
            this.model.on('hide', this.remove, this);
            this.model.on('destroy', this.remove, this);
        },

        render: function() {
            var html = this.template(this.model.toJSON());

            this.$el.html(html);
            this.$el.children().css('background', 'url(images/' + this.model.get('cover') + ') no-repeat 0 0');

            return this;
        },

        remove: function() {
            this.$el.remove();
        },
        
        showInfo: function(e) {
            e.preventDefault();

            $('.slider-covers__anchor_selected').removeClass('slider-covers__anchor_selected');
            $(e.target).addClass('slider-covers__anchor_selected');

            var image = this.model.get('image');
            
            this.model.trigger('info');
            $('.body').trigger('background_change', [image] );
        },
    });

    return MovieView;
});