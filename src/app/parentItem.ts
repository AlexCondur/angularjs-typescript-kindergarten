module app {

    export interface IParentItem extends IItem {

        subItems: IParentItem[] | IItem[];
        partiallySelected: boolean;
        expanded: boolean;
        onSubItemToggle(): void;
        initSubItems(item: GenericItem): void;
        copyItems(): void;

    }

    export class ParentItem
        extends Item
        implements IParentItem {

        subItems: IParentItem[] | IItem[];
        partiallySelected: boolean;
        expanded: boolean;

        constructor(
            item: GenericItem,
            parent: IParentItem = null
        ) {
            super(item, parent);
            this.initDefaults(item, parent);
        }

        public initDefaults(item: GenericItem, parent: IParentItem) {
            super.initDefaults(item, parent);
            super.toggle;

            this.partiallySelected = false;
            this.expanded = false;
            this.initSubItems(item);
        }

        public initSubItems(item: GenericItem) {
            this.subItems = _.map(item.items,
                (i) => {
                    return i.items
                        ? new ParentItem(i, this)
                        : new Item(i, this);
                });

        }

        public copyItems(): void {
            _.forEach(this.subItems, (i: Item | ParentItem) => {

                if (i instanceof ParentItem) {

                    i.copyItems();

                } else {

                    allChildren.push(i);

                }

            })
        }

        public toggle(selection: boolean) {
            this.selected = !selection;

            _.forEach(this.subItems, (i: IItem) => {
                i.selected = !selection;
                i.toggle(selection);
            });

            if (this.parent) {
                this.parent.onSubItemToggle();
            }

        }

        public onSubItemToggle() {
            this.selected = _.every(this.subItems, i => i.selected);

            this.partiallySelected = _.some(this.subItems, i => i.selected) ||
                _.some(this.subItems, i => i instanceof ParentItem && i.partiallySelected);

            // this.styleClass = this.selected ? 
            // 'fa-check' :
            // this.partiallySelected ? 'fa-check-minus' : 'fa-square';


            if (this.parent) {
                this.parent.onSubItemToggle();
            }

        }

    }

    /* istanbul ignore next */
}