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
