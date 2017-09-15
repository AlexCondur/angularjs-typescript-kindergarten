/// <reference path='../../node_modules/@types/jquery/index.d.ts' />
/// <reference path='../../node_modules/@types/lodash/index.d.ts' />
/// <reference path='../../node_modules/@types/angular/index.d.ts' />
var app;
(function (app) {
    'use strict';
    app.appMvc = angular
        .module('appMvc', []);
})(app || (app = {}));

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

var app;
(function (app) {
    var Item = (function () {
        function Item(item, parent) {
            this.initDefaults(item, parent);
        }
        Item.prototype.initDefaults = function (item, parent) {
            this.id = _.toLower(item.name);
            this.name = item.name;
            this.selected = false;
            this.parent = parent;
        };
        Item.prototype.toggle = function (selection) {
            var itemsWithId = this.getItemsById(app.allChildren);
            this.selected = !selection;
            _.forEach(itemsWithId, function (itm) {
                itm.selected = !selection;
                itm.parent.onSubItemToggle();
            });
            if (this.parent) {
                this.parent.onSubItemToggle();
            }
        };
        Item.prototype.getItemsById = function (obj) {
            var idToFind = this.id;
            var parentToFind = this.parent;
            return _.filter(obj, function (itm) {
                return itm.id === idToFind && itm.parent !== parentToFind;
            });
        };
        return Item;
    }());
    app.Item = Item;
    /* istanbul ignore next */
})(app || (app = {}));

var app;
(function (app) {
    app.allChildren = [];
    var KinderService = (function () {
        function KinderService() {
            this._kinderUrl = './api/kinder.json';
        }
        return KinderService;
    }());
    app.KinderService = KinderService;
})(app || (app = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var app;
(function (app) {
    var ParentItem = (function (_super) {
        __extends(ParentItem, _super);
        function ParentItem(item, parent) {
            if (parent === void 0) { parent = null; }
            var _this = _super.call(this, item, parent) || this;
            _this.initDefaults(item, parent);
            return _this;
        }
        ParentItem.prototype.initDefaults = function (item, parent) {
            _super.prototype.initDefaults.call(this, item, parent);
            _super.prototype.toggle;
            this.partiallySelected = false;
            this.expanded = false;
            this.initSubItems(item);
        };
        ParentItem.prototype.initSubItems = function (item) {
            var _this = this;
            this.subItems = _.map(item.items, function (i) {
                return i.items
                    ? new ParentItem(i, _this)
                    : new app.Item(i, _this);
            });
        };
        ParentItem.prototype.copyItems = function () {
            _.forEach(this.subItems, function (i) {
                if (i instanceof ParentItem) {
                    i.copyItems();
                }
                else {
                    app.allChildren.push(i);
                }
            });
        };
        ParentItem.prototype.toggle = function (selection) {
            this.selected = !selection;
            _.forEach(this.subItems, function (i) {
                i.selected = !selection;
                i.toggle(selection);
            });
            if (this.parent) {
                this.parent.onSubItemToggle();
            }
        };
        ParentItem.prototype.onSubItemToggle = function () {
            this.selected = _.every(this.subItems, function (i) { return i.selected; });
            this.partiallySelected = _.some(this.subItems, function (i) { return i.selected; }) ||
                _.some(this.subItems, function (i) { return i instanceof ParentItem && i.partiallySelected; });
            // this.styleClass = this.selected ? 
            // 'fa-check' :
            // this.partiallySelected ? 'fa-check-minus' : 'fa-square';
            if (this.parent) {
                this.parent.onSubItemToggle();
            }
        };
        return ParentItem;
    }(app.Item));
    app.ParentItem = ParentItem;
    /* istanbul ignore next */
})(app || (app = {}));

var app;
(function (app) {
    function repeatUnique() {
        return function (collection, keyname) {
            return _.uniqBy(collection, keyname);
        };
    }
    app.repeatUnique = repeatUnique;
    app.appMvc
        .filter('unique', repeatUnique);
    /* istanbul ignore next */
})(app || (app = {}));
