
angular.module('starter.directives', [])

    .directive('posCenter',function(){
        return function(scope,elem,attr){
            alert(elem[0].offsetHeight)
        }
    })