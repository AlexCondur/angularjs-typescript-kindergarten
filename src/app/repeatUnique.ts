module app {

    export function repeatUnique() {

        return function (collection: IItem[], keyname: string) {
            return _.uniqBy(collection, keyname);
        };

    }


    appMvc
        .filter('unique', repeatUnique);

    /* istanbul ignore next */
}