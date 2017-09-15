module app.Tests {
    let name: string;
    let i: IItem;
    let p: IParentItem;

    describe('Item class', () => {

        beforeEach(() => {

            name = 'Ho';
            p = new ParentItem({name:'Tata'}, null);
            i = new Item({name: name}, p);
            spyOn(i.parent, 'onSubItemToggle');

        });
        
        describe('initDefaults method', () => {

            it('should set id to name to lowercase', () => {

                expect(i.id).toBe('ho');

            });

            it('should set selected to false', () => {

                expect(i.selected).toBeFalsy();

            });

            it('should set the name', () => {

                expect(i.name).toBe('Ho');

            });

            it('should set the parent', () => {

                expect(i.parent).toBe(p);

            });

        });

        describe('toggle method', () => {

            beforeEach(() => {

                i.toggle(false);

            });

            it('should set selected to be the opposite', () => {

                expect(i.selected).toBeTruthy();

            });

            it('should call onSubItemToggle method if the parent is defined', () => {
                
                expect(i.parent.onSubItemToggle).toHaveBeenCalled();

            });

            it('should do nothing when the item has no parent', () => {

                i = new Item({name: 'Nume'}, null);
                i.toggle(false);

                expect(i.parent).toBeNull();

            });

        });

        describe('getItemsById method', () => {

            it('should return an array that contains only the dupes of the given item, but not the item itself', () => {
                let i2: IItem = new Item({name: 'Ho'}, null);
                let arr: IItem[] = [i, i2];
                
                let res = i.getItemsById(arr);

                expect(res).toContain(i2);
                expect(res).not.toContain(i);

            });

        });

        
    });
}