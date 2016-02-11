var app = angular.module("myapp", ['ngMaterial', 'ngMessages']);
app.controller("check", function($scope) {
    $scope.Regex = /^([a-zA-Z]+)$/;
      //var self = this;
    $scope.isReadOnly =false;
    $scope.myItems = ['cricket','football'];
    $scope.colleges = ['VJTI', 'K.J.Somaiya', 'Thakur', 'n.b.m', 'sardar patel'];
    $scope.selected = [];
    $scope.gen = "Male";
    $scope.names = ['pankaj', 'raj', 'ram', 'akash', 'bhushan', 'chetan', 'dinesh', 'faran', 'ganesh', 'kavin'];
    $scope.states = [{
        id: 1,
        state1: 'maharashtra',
        cities: ['mumbai', 'pune', 'nagpur', 'nashik']
    }, {
        id: 2,
        state1: 'gujrat',
        cities: ['vapi', 'ahmadabad', 'surat', 'rajkot']
    }, {
        id: 3,
        state1: 'andhra',
        cities: ['tirupati', '  Guntur', 'Kurnool', 'Kadapa']
    }, {
        id: 4,
        state1: 'goa',
        cities: ['panaji', 'margao', 'ponda', 'canacona']
    }];
    // <=============================================================================>
    var self = this;
    self.simulateQuery = false;
    self.isDisabled = false;
    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;
    self.newState = newState;

    function newState(state) {
        alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    }
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
        return allStates.split(/, +/g).map(function(state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
// <=============================================================================>

$scope.updateCity = function() {
    var selecity = $scope.userCity;
    // $scope.userCity= JSON.parse($scope.userCity);
    console.log(selecity);

}

$scope.save = function() {
    var fnam = $scope.fname;
    var lnam = $scope.lname;
    var add = $scope.txtaddr;
    var gendr = $scope.gen;
    //$scope.userState=JSON.parse($scope.userState);
    var stat = $scope.userState.state1;
    var city = $scope.usercity;
    var colg = $scope.usercol;
    //console.log(userState);
    if (fnam == undefined) {
        window.alert("Enter your First name");
    } else if (lnam == undefined) {
        window.alert("Enter your Last name");
    } else if (gendr == undefined) {
        window.alert("select your gender");
    } else if (add == undefined) {
        window.alert("enter address");
    } else if (stat == undefined) {
        window.alert("select state");
    } else if (city == undefined) {
        window.alert("select city");
        //else if (colg == undefined) {
        //     window.alert("select college");
        // } else if ($scope.ch1 || $scope.ch2 || $scope.ch3 || $scope.ch4 || $scope.ch5 || $scope.ch6) {
        //     var str = "";
        //     if ($scope.ch1 == true) {
        //         str = str + "Accounting,";
        //     }
        //     if ($scope.ch2 == true) {
        //         str = str + "Biology,";
        //     }
        //     if ($scope.ch3 == true) {
        //         str = str + "Computer,"
        //     }
        //     if ($scope.ch4 == true) {
        //         str = str + "Engineering,"
        //     }
        //     if ($scope.ch5 == true) {
        //         str = str + "Geography,"
        //     }
        //     if ($scope.ch6 == true) {
        //         str = str + "History,"
        //     }

        $scope.reg.$setSubmitted();

        document.getElementById("demo").innerHTML += "First Name:<b>" + fnam + "<br/>";
        document.getElementById("demo").innerHTML += "Last Name:<b>" + lnam + "<br/>";
        document.getElementById("demo").innerHTML += "Address:<b>" + add + "<br/>";
        document.getElementById("demo").innerHTML += "Gender:<b>" + gendr + "<br/>";
        document.getElementById("demo").innerHTML += "State:<b>" + stat + "<br/>";
        document.getElementById("demo").innerHTML += "City:<b>" + city + "<br/>";
        // document.getElementById("demo").innerHTML += "College:<b>" + colg + "<br/>";
        // document.getElementById("demo").innerHTML += "Subjects:<b>" + str + "<br/>";
    } else {
        // window.alert("plx select sub");
    }

}
$scope.reset = function() {
    // console.log(reg.txtname.$error);
    $scope.userState = undefined;
    $scope.fname = "";
    $scope.lname = "";
    $scope.txtaddr = "";
    //$scope.txtaddr = undefined;
    $scope.usercity = undefined;
    $scope.usercol = undefined;
    $scope.gen = undefined;
    $scope.ch1 = undefined;
    $scope.ch2 = undefined;
    $scope.ch3 = undefined;
    $scope.ch4 = undefined;
    $scope.ch5 = undefined;
    $scope.ch6 = undefined;
    $scope.gen = "Male";
    $scope.res = "";
    $scope.reg.$setPristine();
    $scope.reg.$setUntouched();
}
$scope.subsel = function() {
    $scope.items = ['Accounting', 'Biology', 'Computer', 'Engineering', 'Geography', 'History'];


}

});
