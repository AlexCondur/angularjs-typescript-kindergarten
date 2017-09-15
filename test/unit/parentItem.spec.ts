module app.Tests {
    let i: IItem;
    let p: IParentItem;
    let p2: IParentItem;

    describe('parentItem class', () => {

        beforeEach(() => {
            i = new Item({name: 'Fiu'}, null);
            p = new ParentItem({name: 'Tata'});
            p2 = new ParentItem({name:'Tata2', items: [{name: 'Fiu1'}, {name:'fiu2'}]}, p);

            spyOn(p2.parent, 'onSubItemToggle');


        });

        describe('the initDefaults method', () => {

            it('should set partiallySelected to false', () => {

                expect(p.partiallySelected).toBeFalsy();

            });

            it('should set expanded to false', () => {

                expect(p.expanded).toBeFalsy();

            });

        });

        describe('method toggle', () => {

            beforeEach(() => {

                p.toggle(false);

            });

            it('should set selected to be the opposite', () => {

                expect(p.selected).toBeTruthy();

            });

            it('should have same selected status as his children', () => {
                p2.toggle(false);
                
                expect(p2.subItems[0].selected).toBeTruthy();
                expect(p2.subItems[1].selected).toBeTruthy();
                

            });

            it('should call onSubItemToggle method if has a parent', () => {
                
                p2.toggle(false);

                expect(p2.parent.onSubItemToggle).toHaveBeenCalled();

            });

        });


    });
}