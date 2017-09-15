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
