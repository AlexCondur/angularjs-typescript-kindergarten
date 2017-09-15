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
