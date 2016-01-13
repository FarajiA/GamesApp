;(function(){
angular.module('GameApp').factory( 'MineSweeperSvc',MineSweeperSvc);
MineSweeperSvc.$inject=['ConfigSvc'];
function MineSweeperSvc(ConfigSvc){
	function GetRandomInt(min,max){
		var randomnumber = Math.floor(Math.random()*(max-min+1))+min;
		return randomnumber;
	}
	
	function isIn(arr, num){
		var isInArr=false;
		for (var ii=0;ii<arr.length;ii++){
			if (arr[ii]==num){isInArr=true;}
		}
		//console.log(isInArr);
		return isInArr;
	}
	
	//var svc=function(){}
	var svc={}
	svc.Hello=function(){console.log('hello world!');}
	svc.MaxHeight=ConfigSvc.MineSweeper.Config.height;
	svc.MaxWidth=ConfigSvc.MineSweeper.Config.width;
	svc.SafeSpacesFound=0;
	svc.BombsFound=0;
	svc.GridSize=	svc.MaxHeight *svc.MaxWidth;
	svc.NumberOfBombs=ConfigSvc.MineSweeper.Config.bombs;
	console.log('Hello Services!');
	svc.BombSpots=[GetRandomInt(1,svc.GridSize)];
	svc.HeightRange=[];
	svc.WidthRange=[];
	
	while (svc.BombSpots.length<svc.NumberOfBombs){
		var tmpSpot =GetRandomInt(1,svc.GridSize);
	
		if (!isIn(svc.BombSpots,tmpSpot)){svc.BombSpots.push( tmpSpot  ); }
		}


		svc.MSGrid=[];
	for (var i =0;i<svc.MaxHeight;i++){
		var tmpLine =[];
		svc.HeightRange.push(i);
		for (var j =0;j<svc.MaxWidth;j++){
				if (i==0){svc.WidthRange.push(j);}
				
				var tmpID=(i)*svc.MaxWidth+j+1;
				
				var Cell={};
				Cell.isCovered=true;
				Cell.hasBomb=isIn(svc.BombSpots,tmpID)?true:false;
				Cell.Marker=0;
				Cell.Number=0;
				if (!Cell.hasBomb){
					if (isIn(svc.BombSpots,tmpID+1)) {Cell.Number++;}
					if (isIn(svc.BombSpots,tmpID-1)) {Cell.Number++;}
					if (isIn(svc.BombSpots,tmpID+svc.MaxWidth)) {Cell.Number++;}
					if (isIn(svc.BombSpots,tmpID-svc.MaxWidth)) {Cell.Number++;}
					if (isIn(svc.BombSpots,tmpID-svc.MaxWidth-1)) {Cell.Number++;}
					if (isIn(svc.BombSpots,tmpID-svc.MaxWidth+1)) {Cell.Number++;}
					if (isIn(svc.BombSpots,tmpID+svc.MaxWidth-1)) {Cell.Number++;}
					if (isIn(svc.BombSpots,tmpID+svc.MaxWidth+1)) {Cell.Number++;}
					if(Cell.Number==0){Cell.isCovered=false; svc.SafeSpacesFound=svc.SafeSpacesFound+1;}
				}else {Cell.Number=-1;}
				tmpLine.push(Cell);
				
				
		}
		svc.MSGrid.push(tmpLine);
		
	}
	
	
	
	
	return svc;
}
})();
