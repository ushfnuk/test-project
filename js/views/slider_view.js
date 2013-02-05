define([
    'jquery',
    'underscore',
    'backbone',
    'models/movie',
    'views/movie_view',
    'views/info_view'
], function($, _, Backbone, Movie, MovieView, InfoView) {
    "use strict";

    var SliderView = Backbone.View.extend({
        tagName: 'ul',
        className: 'slider-covers',

        initialize: function() {
            this.infoModel = new Movie();
            
            this.infoView = new InfoView({
                model: this.infoModel
            });
            
            $('.content').html(this.infoView.el);
            this.collection.on('add', this.addOne, this);
            this.collection.on('reset', this.addAll, this);

            $('.body').on('background_change', this.changeBackground);
            
            $('.slider__prev').on('click', _.bind(this.slideLeft, this));
            $('.slider__next').on('click', _.bind(this.slideRight, this));
        },

        changeBackground: function(e, image) {
            e.preventDefault();

            $(e.target).css('background', 'url(images/' + image + ') no-repeat 0 0');
        },

        render: function() {
            this.addAll();
        },

        addOne: function(movie) {
            var movieView = new MovieView({model: movie});
            
            movie.on('info', function() {
                this.infoView.model.set(movie.toJSON());
            }, this);
            
            this.$el.append(movieView.render().el);
        },

        addAll: function() {
            this.$el.empty();
            
            this.collection.forEach(this.addOne, this);

            this.$el.width(this.collection.length * this.SLIDER_ITEM_WIDTH);
            this.$('.slider-covers__anchor:eq(0)').click();
            
            this.check(0);
            this.slide(0);
            
            $('.content').show();
        },


        SLIDER_ITEM_WIDTH: 257,
        MAX_SLIDES: 7,
        
        sliderPrev: $('.slider__prev'),
        sliderNext: $('.slider__next'),
        sliderNav: $('.slider__nav'),
        
        slideLeft: function(e) {
            var position = parseInt(this.$el.css('left'), 10);
            position = this.check(position + 3 * this.SLIDER_ITEM_WIDTH);
            
            this.slide(position);
        },
        
        slideRight: function(e) {
            var position = parseInt(this.$el.css('left'), 10);
            position = this.check(position - 3 * this.SLIDER_ITEM_WIDTH);
            
            this.slide(position);
        },
        
        slide: function(position) {
            var me = this;
            
            this.sliderNav.off('click');
            this.$el.animate({left: position}, function() {
                me.sliderPrev.on('click', _.bind(me.slideLeft, me));
                me.sliderNext.on('click', _.bind(me.slideRight, me));
            });
        },
        
        check: function(pos) {
            var me = this;
            
            if (this.collection.length < this.MAX_SLIDES) {
                this.sliderNav.addClass('slider__prev_disabled');
                this.slide(0);
            }
            
            if (pos >= 0) {
                pos = 0;
                this.sliderPrev.addClass('slider__prev_disabled')
                    .off('click');
            } else {
                this.sliderPrev.removeClass('slider__prev_disabled')
                    .on('click', _.bind(me.slideLeft, me));
            }
            
            if (pos <= -this.$el.width() + this.MAX_SLIDES * this.SLIDER_ITEM_WIDTH) {
                pos = -this.$el.width() + this.MAX_SLIDES * this.SLIDER_ITEM_WIDTH;
                this.sliderNext.addClass('slider__prev_disabled')
                    .off('click');
            } else {
                this.sliderNext.removeClass('slider__prev_disabled')
                    .on('click', _.bind(me.slideRight, me));
            }
            
            return pos;
        }
    });

    return SliderView;
});