;(function(){
	angular.module('GameApp').controller('HanoiConfigCtrl',HanoiConfigCtrl);
	HanoiConfigCtrl.$inject=['$scope','ConfigSvc'];
	function HanoiConfigCtrl($scope,ConfigSvc){
		$scope.layers = ConfigSvc.Hanoi.Config.Layers;
		$scope.ReConfig=ReConfig;
		
		function ReConfig(){
			//console.log('submitting hanoi.');
			ConfigSvc.Hanoi.ConfigHanoi($scope.layers);
		}
		
		
	}

	
})();