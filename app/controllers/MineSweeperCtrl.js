;(function(){
	angular.module('GameApp').controller('MineSweeperCtrl',MineSweeperCtrl);

	MineSweeperCtrl.$inject=['$scope','MineSweeperSvc'];
	function MineSweeperCtrl($scope,MineSweeperSvc){
		//var vm=this;
		//var svc=MineSweeperSvc;
		$scope.title="MineSweeper!";
		$scope.tmpCell=MineSweeperSvc.MSGrid[0][0];
		$scope.Grid=MineSweeperSvc.MSGrid;
		$scope.leftClick=leftClick;
		$scope.TestFunc=TestFunc;
		$scope.SpacesFound = MineSweeperSvc.SafeSpacesFound;
		$scope.HeightRange=MineSweeperSvc.HeightRange;
		$scope.WidthRange=MineSweeperSvc.WidthRange;
		
		console.log($scope.HeightRange);
		console.log($scope.WidthRange);
		function TestFunc(){
			console.log("called test func!");
			alert("called test func!");
			
		}
		
		function leftClick(){
			MineSweeperSvc.SafeSpacesFound=MineSweeperSvc.SafeSpacesFound+1;
			$scope.SpacesFound = MineSweeperSvc.SafeSpacesFound;
			if($scope.SpacesFound==(MineSweeperSvc.GridSize-MineSweeperSvc.NumberOfBombs)){
					alert("You win!");
				
			}
			
		}
		
		
		
	}

})();
