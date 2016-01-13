;(function(){
angular.module('GameApp').factory( 'ConfigSvc',ConfigSvc);
function ConfigSvc(){
	var svc = {};
	svc.Hanoi={};
	svc.GNWar={};
	svc.MineSweeper={};
	svc.Hanoi.Config={'Layers':4};
	svc.MineSweeper.Config={'width':16, 'height':16, 'bombs':40};
	svc.GNWar.Config={'vidurl':'http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&loop=1&autoplay=1&&playlist=dQw4w9WgXcQ'};
	svc.Hanoi.ConfigHanoi=ConfigHanoi;
	svc.MineSweeper.ConfigMS=ConfigMS;
	svc.GNWar.ConfigGNWar=ConfigGNWar;
	
	function ConfigHanoi(layers){
		if(layers){svc.Hanoi.Config.Layers=layers;}else{return svc.Hanoi.Config.Layers;}
		
	}
	
	function ConfigMS(MSFormConfig){
		console.log(MSFormConfig);
		if(MSFormConfig.width){
			console.log('editing width');
			svc.MineSweeper.Config.width=MSFormConfig.width;
			}
		if(MSFormConfig.height){svc.MineSweeper.Config.height=MSFormConfig.height;
		console.log('editing height');
		}
		if(MSFormConfig.bombs){
			console.log('editing bombs');
			svc.MineSweeper.Config.bombs=MSFormConfig.bombs;}
		
	}
	
	
	function ConfigGNWar(aurl){
		console.log('editing roll');
		if(aurl){svc.GNWar.Config.vidurl=aurl;}else{return svc.GNWar.Config.vidurl;}
		
	}
	
	return svc;	
	
}


})();