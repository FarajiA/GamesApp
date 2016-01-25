;(function(){
angular.module('GameApp').factory( 'MineSweeperSvc',MineSweeperSvc);
MineSweeperSvc.$inject = ['ConfigSvc', '$q'];
function MineSweeperSvc(ConfigSvc, $q) {
    

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
    var config = {};
    var settings = {};
    settings.configMineSettings = function() {

        var deffered = $q.defer();
        config.Hello = function() { console.log('hello world!'); };
        config.MaxHeight = ConfigSvc.MineSweeper.Config.height;
        config.MaxWidth = ConfigSvc.MineSweeper.Config.width;
        config.SafeSpacesFound = 0;
        config.BombsFound = 0;
        config.GridSize = config.MaxHeight * config.MaxWidth;
        config.NumberOfBombs = ConfigSvc.MineSweeper.Config.bombs;
        console.log('Hello Services!');
        config.BombSpots = [GetRandomInt(1, config.GridSize)];
        config.HeightRange = [];
        config.WidthRange = [];

        while (config.BombSpots.length < config.NumberOfBombs) {
            var tmpSpot = GetRandomInt(1, config.GridSize);

            if (!isIn(config.BombSpots, tmpSpot)) {
                config.BombSpots.push(tmpSpot);
            }
        }


        config.MSGrid = [];
        for (var i = 0; i < config.MaxHeight; i++) {
            var tmpLine = [];
            config.HeightRange.push(i);
            for (var j = 0; j < config.MaxWidth; j++) {
                if (i == 0) {
                    config.WidthRange.push(j);
                }

                var tmpID = (i) * config.MaxWidth + j + 1;

                var Cell = {};
                Cell.isCovered = true;
                Cell.hasBomb = isIn(config.BombSpots, tmpID) ? true : false;
                Cell.Marker = 0;
                Cell.Number = 0;
                if (!Cell.hasBomb) {
                    if (isIn(config.BombSpots, tmpID + 1)) {
                        Cell.Number++;
                    }
                    if (isIn(config.BombSpots, tmpID - 1)) {
                        Cell.Number++;
                    }
                    if (isIn(config.BombSpots, tmpID + config.MaxWidth)) {
                        Cell.Number++;
                    }
                    if (isIn(config.BombSpots, tmpID - config.MaxWidth)) {
                        Cell.Number++;
                    }
                    if (isIn(config.BombSpots, tmpID - config.MaxWidth - 1)) {
                        Cell.Number++;
                    }
                    if (isIn(config.BombSpots, tmpID - config.MaxWidth + 1)) {
                        Cell.Number++;
                    }
                    if (isIn(config.BombSpots, tmpID + config.MaxWidth - 1)) {
                        Cell.Number++;
                    }
                    if (isIn(config.BombSpots, tmpID + config.MaxWidth + 1)) {
                        Cell.Number++;
                    }
                    if (Cell.Number == 0) {
                        Cell.isCovered = false;
                        config.SafeSpacesFound = config.SafeSpacesFound + 1;
                    }
                } else {
                    Cell.Number = -1;
                }
                tmpLine.push(Cell);


            }
            config.MSGrid.push(tmpLine);

           // if (i === config.MaxHeight)
            //    
        }

        deffered.resolve(config);
        return deffered.promise;
    };

    return settings;
}
})();
