module app.Tests {
    describe('The filter method', () => {
        let func = repeatUnique(),
            collection: IItem[],
            keyname: string,
            i: IItem,
            i2: IItem;

        beforeEach(() => {
            i = new Item({ name: 'Nume' }, null);
            i2 = new Item({ name: 'Prenume' }, null);
            collection = [i, i2, i, i2, i2];
            keyname = 'nume';

            func(collection, keyname);
        });

        

        it('should', () => {

            expect(func(collection, keyname)).toContain(i);
            expect(func(collection, keyname)).not.toContain(i2);

        });



    });
}