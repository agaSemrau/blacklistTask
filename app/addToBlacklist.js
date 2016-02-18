(function () {
    var app = angular.module('Blacklist', ['ngAnimate']);

    app.controller('blacklistCtrl', function ($scope) {

        $scope.tableEmpty = true;
        $scope.typeDataMessage = false;

        $scope.date = new Date();
        $scope.blacklist = [];
        $scope.newItem = {email: '', type: '', date: '',cardNo:'', cardType:''};


        $scope.addAccount = function(selected){
            $scope.account=selected
        };
        $scope.addType = function(selected){
                $scope.type = selected;
        };

        $scope.addCardType = function(selected){
                $scope.cardType = selected
        };

        $scope.addCardNo = function(selected){
                $scope.cardNo = selected
        };

        $scope.addItem = function (param1, param2) {

            if (param1 === '' ||
                param1 === undefined ||
                param2 === undefined ||
                param2 === ''){

                $scope.tableEmpty = true;
                $scope.typeDataMessage = true;
            }

            else {
                $scope.tableEmpty = false;
                $scope.typeDataMessage = false;

                var newItem = angular.copy(param1);
                $scope.blacklist.push({
                    email: newItem,
                    date: $scope.date,
                    type: $scope.type,
                    cardNo: $scope.cardNo,
                    cardType: $scope.cardType
                });
            }
        };

        $scope.removeItem = function (item) {
            var idx = $scope.blacklist.indexOf(item);
            $scope.blacklist.splice(idx, 1);

            if ($scope.blacklist.length === 0) {
                $scope.tableEmpty = true;
            }
        };
    });
})();