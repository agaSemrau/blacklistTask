(function () {
    var app = angular.module('Blacklist', ['ngAnimate']);

    app.controller('blacklistCtrl', function ($scope) {

        $scope.tableEmpty = true;
        $scope.typeDataMessage = false;

        $scope.date = new Date();
        $scope.blacklist = [];
        $scope.newItem = {email: '', type: '', date: '', cardNo: '', cardType: ''};


        $scope.addAccount = function (selected) {
            $scope.account = selected
        };
        $scope.addType = function (selected) {
            $scope.type = selected;
        };

        $scope.addCardType = function (selected) {
            $scope.cardType = selected
        };

        $scope.addCardNo = function (selected) {
            $scope.cardNo = selected
        };

        $scope.addEmail = function (selected) {
            $scope.email = selected
        };

        $scope.checkDupes = function (param) {
            $scope.blacklist.forEach(function (element) {
                if (element.email === param || element.account === param || element.cardNo === param) {
                    var position = $scope.blacklist.indexOf(element);
                    $scope.blacklist.splice(position, 1);
                    $scope.dupes = true;
                }
                else {
                    $scope.dupes = false;
                }
            })
        };
        $scope.addItem = function (param1, param2) {
            console.log(param1)

            if (param1 === '' ||
                param1 === undefined ||
                param2 === undefined ||
                param2 === '') {

                $scope.tableEmpty = true;
                $scope.typeDataMessage = true;
            }

            else {
                $scope.tableEmpty = false;
                $scope.typeDataMessage = false;

                $scope.blacklist.push({
                    email: $scope.email,
                    date: $scope.date,
                    type: $scope.type,
                    cardNo: $scope.cardNo,
                    cardType: $scope.cardType,
                    account: $scope.account
                });
                console.log($scope.blacklist)
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