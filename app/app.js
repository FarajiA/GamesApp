;(function(){


angular.module('GameApp',['ui.router']);


angular.module('GameApp').config(AppConfig);



function AppConfig($stateProvider, $urlRouterProvider){
	//$urlRouterProvider.otherwise("/GameList");
	
	$stateProvider
	

	.state('HanoiTowers',{ 
		url:"/HanoiTowers",
		templateUrl: "app/views/Hanoi.html",
		controller: 'HanoiCtrl'
	
	})
	
	.state('MineSweeper',{ 
		url:"/MineSweeper",
		templateUrl: "app/views/MineSweeper.html",
		controller: 'MineSweeperCtrl'
	
	})
	
	.state('config',{
		abstract:true,
		url:'/config',
		template:'<ui-view/>'
	})
	
	.state('config.hanoi',{
		
		url:'/hanoi',
		templateUrl:"app/views/partials/HanoiConfigPartial.html",
		controller:'HanoiConfigCtrl'
	})
	
	.state('config.minesweeper',{
		
		url:'/minesweeper',
		templateUrl:"app/views/partials/MSConfigPartial.html",
		controller:'MineSweeperConfigCtrl'
	})
	
	
	.state('NuclearWar',{ 
		url:"/NuclearWar",
		
		  resolve: {
                    myvid: function(){  return { vid:"http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&loop=1&autoplay=1&&playlist=dQw4w9WgXcQ" }; }
                },
		
		template:'<div ng-bind="vid"></div><iframe width=\"420\" height=\"315\" src="http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&loop=1&autoplay=1&&playlist=dQw4w9WgXcQ"> </iframe>',
		
		onEnter:function(){alert('You asked for it.');},
		controller: function($scope,myvid){ $scope.vid=myvid.vid; console.log($scope.vid); },
		onExit:function(){alert('Had enough?');}
	
	})
	
	
	
	
}

})();