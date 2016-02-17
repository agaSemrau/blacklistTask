(function () {
    var app = angular.module('Blacklist', []);

    app.controller('blacklistCtrl', function ($scope) {

        $scope.tableEmpty = true;
        $scope.typeDataMessage = false;

        $scope.date = new Date();
        $scope.blacklist = [];
        $scope.newItem = {email: '', type: '', date: '',cardNo:'', cardType:''};

        $scope.addType = function(selected){
            $scope.type = selected
        };

        $scope.addCard = function(selected){
            $scope.cardNo = selected
            console.log()

        };

        $scope.addItem = function (item) {
            if (item === '') {
                $scope.tableEmpty = true;
                $scope.typeDataMessage = true;
                return
            }
            if ($scope.blacklist.length > -1) {
                $scope.tableEmpty = false;
                $scope.typeDataMessage = false;
            }


            var newItem = angular.copy(item);
            $scope.blacklist.push({
                email: newItem,
                date: $scope.date,
                type:  $scope.type,
                cardNo: $scope.cardNo,
                cardType: $scope.cardType
            });
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