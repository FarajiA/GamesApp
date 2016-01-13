;(function(){
	angular.module('GameApp').controller('MineSweeperConfigCtrl',MineSweeperConfigCtrl);
	MineSweeperConfigCtrl.$inject=['$scope','ConfigSvc'];
	function MineSweeperConfigCtrl($scope,ConfigSvc){
		console.log('entering controller');
		$scope.FormConfig={};
		$scope.FormConfig={'width':ConfigSvc.MineSweeper.Config.width,
		'height':ConfigSvc.MineSweeper.Config.height,
		'bombs':ConfigSvc.MineSweeper.Config.bombs
		};
		
		$scope.ReConfig=ReConfig;
		
		function ReConfig(){
			ConfigSvc.MineSweeper.ConfigMS($scope.FormConfig);
			
		}
		
		//svc.MineSweeper.Config={'width':9, 'height':9, 'bombs':10}
	}

	
})();