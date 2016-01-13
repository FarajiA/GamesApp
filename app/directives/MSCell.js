;(function(){
angular.module('GameApp').directive('msCell',msCell);



function msCell(){
	function CellCtrl(scope,element,attrs){
		//console.log(scope);
		
		scope.myclick=myclick;
		console.log(scope.lclick);
		function myclick(){
			
			
			//console.log(scope.celldata);
			if(scope.celldata.hasBomb){
				alert("You Lose!");
				
			}
			else{
				scope.lclick();
				scope.celldata.isCovered=false;
				
				
			}
		}
		
	}

	return {
		restrict:'E',
		//transclude:true,
		scope:{
			celldata:'=data',
			lclick:'&leftClick'
			
		
		
		},
		templateUrl:"app/views/partials/MSPartials.html",
		link:CellCtrl
	
	
	}

}

})();
