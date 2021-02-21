(function(){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){
    $scope.list="";
    $scope.msg=""
    $scope.border={};
    $scope.color={};


    $scope.parseList=function(){
      calculate($scope.list);
    };
function calculate(string)
{
  var res=string.split(",");
  var count=0;
  for(var i=0;i<res.length;i++){

    if(res[i]!="" && res[i]!=" ")
    {
      count++;
    }
  }
  if(count<=3 && count>0)
  {
    $scope.msg="Enjoy!";
    $scope.color={"color":"Green"};
    $scope.border={"border-color":"Green"};
  }
  else if(count>3){
    $scope.msg="Too much!";
    $scope.color={"color":"Green"};
    $scope.border={"border-color":"Green"};
  }
  else if(count==0)
  {
    $scope.msg="Please enter data first";
    $scope.color={"color":"Red"};
    $scope.border={"border-color":"Red"};
  }

}

  };
})();
