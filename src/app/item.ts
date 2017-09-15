module app {

    export interface IItem {

        id: string;
        name: string;
        selected: boolean;
        parent: IParentItem;
        toggle(selection?: boolean): void;
        getItemsById(obj: IItem[]): IItem[];

    }
    export interface GenericItem {
        name: string;
        items?: GenericItem[];
    }

    export class Item
        implements IItem {
        id: string;
        name: string;
        selected: boolean;
        parent: IParentItem;

        constructor(
            item: GenericItem,
            parent: IParentItem
        ) {
            this.initDefaults(item, parent);
        }

        public initDefaults(item: GenericItem, parent: IParentItem) {

            this.id = _.toLower(item.name);
            this.name = item.name;
            this.selected = false;
            this.parent = parent;

        }

        public toggle(selection: boolean) {

            let itemsWithId = this.getItemsById(allChildren);
            this.selected = !selection;

            _.forEach(itemsWithId, (itm) => {
                itm.selected = !selection;
                itm.parent.onSubItemToggle();
            });

            if(this.parent) {
                this.parent.onSubItemToggle();
            }

        }

        public getItemsById(obj: IItem[]): IItem[] {
            let idToFind = this.id;
            let parentToFind = this.parent;

            return _.filter(obj, function (itm) {
                return itm.id === idToFind && itm.parent !== parentToFind;
            });
        }

    }

    /* istanbul ignore next */
}