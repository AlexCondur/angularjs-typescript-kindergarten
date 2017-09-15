var app;
(function (app) {
    'use strict';
    var AppController = (function () {
        function AppController() {
            this.gradi = [];
        }
        AppController.prototype.$onInit = function () {
            var gradiDef = {
                name: 'Gradi',
                items: [
                    {
                        name: 'Strumfi',
                        items: [
                            {
                                name: 'Albastrei',
                                items: [
                                    { name: 'Ho' },
                                    { name: 'Lee' },
                                    { name: 'Fuk' },
                                    { name: 'Sum' },
                                    { name: 'Ting' },
                                    { name: 'Wong' },
                                    { name: 'Marcela' },
                                    { name: 'Georgeta' },
                                    { name: 'Petronel' },
                                    { name: 'Maria' },
                                    { name: 'Vladina' },
                                    { name: 'Consuela' },
                                    { name: 'Marcela' },
                                    { name: 'Horia' },
                                    { name: 'Francisc' },
                                    { name: 'Viorel' },
                                    { name: 'Vasile' }
                                ]
                            },
                            {
                                name: 'Roze',
                                items: [
                                    { name: 'Lusian' },
                                    { name: 'Marin' },
                                    { name: 'Mihai' },
                                    { name: 'Paul' },
                                    { name: 'Viorel' },
                                    { name: 'Daniel' },
                                    { name: 'Petronel' },
                                    { name: 'George' },
                                    { name: 'Adelin' },
                                    { name: 'Vladina' },
                                    { name: 'Muriel' },
                                    { name: 'Pavel' },
                                    { name: 'Miroslav' },
                                    { name: 'Dominic' },
                                    { name: 'Trotuar' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Gargarite',
                        items: [
                            {
                                name: 'Cornite',
                                items: [
                                    { name: 'Wi' },
                                    { name: 'Marius' },
                                    { name: 'Vladina' },
                                    { name: 'Mirosclav' },
                                    { name: 'Too' },
                                    { name: 'Bruce' },
                                    { name: 'Law' },
                                    { name: 'Ding' },
                                    { name: 'Lusian' },
                                    { name: 'Margot' },
                                    { name: 'Bang' },
                                    { name: 'Maria' },
                                    { name: 'Marcela' },
                                    { name: 'Wong' },
                                    { name: 'Trotuar' }
                                ]
                            },
                            {
                                name: 'Buline',
                                items: [
                                    { name: 'Mirosclav' },
                                    { name: 'Marius' },
                                    { name: 'George' },
                                    { name: 'Muriel' },
                                    { name: 'Too' },
                                    { name: 'Adelin' },
                                    { name: 'Adelina' },
                                    { name: 'Georgeta' },
                                    { name: 'Bruce' },
                                    { name: 'Fuk' },
                                    { name: 'Ding' },
                                    { name: 'Law' },
                                    { name: 'Victoria' },
                                    { name: 'Bang' },
                                    { name: 'Fuego' },
                                    { name: 'Miguel' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Stelute',
                        items: [
                            {
                                name: 'Cavaleri',
                                items: [
                                    { name: 'Fuego' },
                                    { name: 'Margot' },
                                    { name: 'Wi' },
                                    { name: 'Consuela' },
                                    { name: 'Paul' },
                                    { name: 'Ting' },
                                    { name: 'Petronel' },
                                    { name: 'Marin' },
                                    { name: 'Trotuar' },
                                    { name: 'Horia' },
                                    { name: 'Ding' },
                                    { name: 'Manson' },
                                    { name: 'Kolo' },
                                    { name: 'Filip' },
                                    { name: 'Raul' }
                                ]
                            },
                            {
                                name: 'Domnite',
                                items: [
                                    { name: 'Manson' },
                                    { name: 'Lee' },
                                    { name: 'Kolo' },
                                    { name: 'Mirosclav' },
                                    { name: 'Daniel' },
                                    { name: 'Marius' },
                                    { name: 'Miguel' },
                                    { name: 'Margot' },
                                    { name: 'Pavel' },
                                    { name: 'Georgeta' },
                                    { name: 'Bang' },
                                    { name: 'Raul' },
                                    { name: 'Dominic' },
                                    { name: 'Francisc' },
                                    { name: 'Adelina' },
                                    { name: 'Vasile' },
                                    { name: 'Bruce' },
                                    { name: 'Filip' }
                                ]
                            }
                        ]
                    }
                ]
            };
            this.g = new app.ParentItem(gradiDef);
            this.gradi.push(this.g);
            this.g.copyItems();
            this.allKids = app.allChildren;
        };
        return AppController;
    }());
    app.AppController = AppController;
    app.appMvc
        .controller('appCtrl', AppController);
    /* istanbul ignore next */
})(app || (app = {}));
