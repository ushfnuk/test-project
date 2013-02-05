define([
    'jquery',
    'backbone'
], function($, Backbone) {
    "use strict";

    var Movie = Backbone.Model.extend({
        defaults: {
            image: 'alice.jpg',
            cover: 'alice.png',
            title: 'Алиса в стране чудес',
            stars: 3.7,
            description: '2011, США, Приключения, Фантастика',
            annotation: "На викторианской вечеринке Алисе делает предложение Хэмиш, богатый, но глупый сын лорда и леди Эскот. Не дав ответа, девушка убегает и идёт за кроликом. Кролик как кролик, вот только он одет в камзол и всё время смотрит на карманные часы.",
            price: 15
        }
    });

    return Movie;
});