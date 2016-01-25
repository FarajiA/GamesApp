;(function(){
	angular.module('GameApp').controller('MineSweeperCtrl',MineSweeperCtrl);

	MineSweeperCtrl.$inject=['$scope','MineSweeperSvc'];
	function MineSweeperCtrl($scope,MineSweeperSvc){
		//var vm=this;
		//var svc=MineSweeperSvc;
		$scope.title="MineSweeper!";

	    MineSweeperSvc.configMineSettings().then(function(config) {

	        $scope.tmpCell = config.MSGrid[0][0];
	        $scope.Grid = config.MSGrid;
	        $scope.SpacesFound = config.SafeSpacesFound;
	        $scope.HeightRange = config.HeightRange;
	        $scope.WidthRange = config.WidthRange;
	        $scope.leftClick = leftClick(config.GridSize, config.NumberOfBombs);


	    });


		$scope.TestFunc=TestFunc;
		
		console.log($scope.HeightRange);
		console.log($scope.WidthRange);
		function TestFunc(){
			console.log("called test func!");
			alert("called test func!");
			
		}
		
		function leftClick(gridSize, numberOfBombs) {
            /*
			MineSweeperSvc.SafeSpacesFound=MineSweeperSvc.SafeSpacesFound+1;
			$scope.SpacesFound = MineSweeperSvc.SafeSpacesFound;
            */
		    if(($scope.SpacesFound + 1) == (gridSize - numberOfBombs ))
		            alert("You win!");
		}
		
		
		
	}

})();
