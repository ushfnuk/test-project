define([
    'jquery',
    'backbone',
    'views/header_navigation',
    'models/list',
    'views/slider_view'
], function($, Backbone, NavigationView, MoviesList, SliderView) {
    "use strict";

    return new (Backbone.Router.extend({

        MOVIES: {
            news: [
                {
                    cover: 'doctor_parnas.png',
                    title: 'Доктор Парнас',
                    stars: 2.4,
                    annotation: "Аннотация для Доктора парнаса",
                    price: 12
                },
                {
                    image: 'prince_of_persia.jpg',
                    cover: 'charlie_and_his_chocolate_factory.png',
                    title: 'Чарли и его шоколадная фабрика',
                    stars: 3,
                    annotation: "Аннотация для Чарли с его шоколадной фабрикой"
                },
                {},
                {
                    image: 'prince_of_persia.jpg',
                    cover: 'prince_of_persia.png',
                    title: 'Принц Персии',
                    stars: 3.7,
                    annotation: 'Герой этой экранизации культовой компьютерной игры, принц Дастан потерял свое королевство из-за козней коварного царедворца. Теперь ему предстоит похитить из рук злодеев могущественный магический артефакт, способный повернуть время вспять.',
                    price: 20
                },
                {
                    cover: 'big_fish.png',
                    title: 'Большая рыба',
                    stars: 3,
                    annotation: 'Приключения большой рыбы на суше или аннотация к фильму',
                    description: '2005, Швейцария, Ужасы',
                    price: 17
                },
                {
                    image: 'prince_of_persia.jpg',
                    title: 'Босиком по мостовой',
                    cover: 'barfuss.png',
                    stars: 4,
                    annotation: 'Есть ли жизнь после психа? Герои фильма раскроют эту тайну',
                    price: 13
                },
                {
                    cover: 'amelie.png',
                    title: 'Амели',
                    stars: 4,
                    description: '2005, Франция, Мелодрама',
                    annotation: 'История любви девушки по имени Амели'
                },
                {
                    cover: 'doctor_parnas.png',
                    title: 'Доктор Парнас',
                    stars: 2.4,
                    annotation: "Аннотация для Доктора парнаса",
                    price: 12
                },
                {
                    image: 'prince_of_persia.jpg',
                    cover: 'charlie_and_his_chocolate_factory.png',
                    title: 'Чарли и его шоколадная фабрика',
                    stars: 3,
                    annotation: "Аннотация для Чарли с его шоколадной фабрикой"
                },
                {},
                {
                    image: 'prince_of_persia.jpg',
                    cover: 'prince_of_persia.png',
                    title: 'Принц Персии',
                    stars: 3.7,
                    annotation: 'Герой этой экранизации культовой компьютерной игры, принц Дастан потерял свое королевство из-за козней коварного царедворца. Теперь ему предстоит похитить из рук злодеев могущественный магический артефакт, способный повернуть время вспять.',
                    price: 20
                },
                {
                    cover: 'big_fish.png',
                    title: 'Большая рыба',
                    stars: 3,
                    annotation: 'Приключения большой рыбы на суше или аннотация к фильму',
                    description: '2005, Швейцария, Ужасы',
                    price: 17
                },
                {
                    image: 'prince_of_persia.jpg',
                    title: 'Босиком по мостовой',
                    cover: 'barfuss.png',
                    stars: 4,
                    annotation: 'Есть ли жизнь после психа? Герои фильма раскроют эту тайну',
                    price: 13
                },
                {
                    cover: 'amelie.png',
                    title: 'Амели',
                    stars: 4,
                    description: '2005, Франция, Мелодрама',
                    annotation: 'История любви девушки по имени Амели'
                }
            ],

            catalog: [
                {
                    cover: 'doctor_parnas.png',
                    title: 'Доктор Парнас',
                    stars: 2.4,
                    annotation: "Аннотация для Доктора парнаса",
                    price: 12
                },
                {
                    image: 'prince_of_persia.jpg',
                    cover: 'charlie_and_his_chocolate_factory.png',
                    title: 'Чарли и его шоколадная фабрика',
                    stars: 3,
                    annotation: "Аннотация для Чарли с его шоколадной фабрикой"
                },
                {},
                {
                    image: 'prince_of_persia.jpg',
                    cover: 'prince_of_persia.png',
                    title: 'Принц Персии',
                    stars: 3.7,
                    annotation: 'Герой этой экранизации культовой компьютерной игры, принц Дастан потерял свое королевство из-за козней коварного царедворца. Теперь ему предстоит похитить из рук злодеев могущественный магический артефакт, способный повернуть время вспять.',
                    price: 20
                },
                {
                    cover: 'big_fish.png',
                    title: 'Большая рыба',
                    stars: 3,
                    annotation: 'Приключения большой рыбы на суше или аннотация к фильму',
                    description: '2005, Швейцария, Ужасы',
                    price: 17
                },
                {
                    image: 'prince_of_persia.jpg',
                    title: 'Босиком по мостовой',
                    cover: 'barfuss.png',
                    stars: 4,
                    annotation: 'Есть ли жизнь после психа? Герои фильма раскроют эту тайну',
                    price: 13
                },
                {
                    cover: 'amelie.png',
                    title: 'Амели',
                    stars: 4,
                    description: '2005, Франция, Мелодрама',
                    annotation: 'История любви девушки по имени Амели'
                }
            ],

            userMovies: [
                {
                    image: 'prince_of_persia.jpg',
                    cover: 'prince_of_persia.png',
                    title: 'Принц Персии',
                    stars: 3.7,
                    annotation: 'Герой этой экранизации культовой компьютерной игры, принц Дастан потерял свое королевство из-за козней коварного царедворца. Теперь ему предстоит похитить из рук злодеев могущественный магический артефакт, способный повернуть время вспять.',
                    price: 20
                },
                {}
            ]
        },

        routes: {
            "": 'news',
            "catalog": "catalog",
            "movies": "userMovies"
        },

        initialize: function() {
            this.movies = new MoviesList();

            this.navigationView = new NavigationView({
                el: '.nav'
            });

            this.sliderView = new SliderView({
                collection: this.movies
            });
            
            this.show();
        },
        
        init: function() {
            Backbone.history.start();
        },

        news: function() {
            this.navigationView.trigger('current_selected', 0);
            this.movies.reset(this.MOVIES.news);
        },

        catalog: function() {
            this.navigationView.trigger('current_selected', 1);
            this.movies.reset(this.MOVIES.catalog);
        },

        userMovies: function() {
            this.navigationView.trigger('current_selected', 2);
            this.movies.reset(this.MOVIES.userMovies);
        },

        show: function() {
            this.sliderView.render();
            $('.slider-covers-wrapper').html(this.sliderView.el);
        }
    }));

});