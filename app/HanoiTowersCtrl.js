;(function(){
	angular.module('GameApp').controller('HanoiCtrl', HanoiCtrl);
	
	HanoiCtrl.$inject=['$scope','$location'];
	
	
	function HanoiCtrl($scope,$location){
	
		$scope.title="Towers of Hanoi";
		var myLays = $location.search().layers;
		console.log(myLays);
		if (myLays){
			$scope.Layers=myLays;
		}else{$scope.Layers=4;}
		$scope.ProcessClick=ProcessClick;
		$scope.MoveCount=0;
		$scope.Sel1=-1;
		$scope.size=4;
		$scope.towers = [];
		
		function MakeTowers(){
			var mytowers=[];
			for (var i =0; i<$scope.Layers;i++){
				var tmp='';
				for (var j=0;j<=i;j++){
					tmp+="* ";
				}
				mytowers.push(tmp);
			}
			return mytowers;
		}
		
		GenerateTowers();
		
		
		function GenerateTowers(){
		
			var mytowers = MakeTowers();
			
			
			
			$scope.towers.push(mytowers);
			
			
			$scope.towers.push(['_']);
			$scope.towers.push(['_']);
			//console.log($scope.towers);
		}
		
		function CheckSolution(){
			var a = $scope.towers[0].length;
			var b = $scope.towers[1];
			var c = $scope.towers[2];
			if (b.length==$scope.Layers){
				
				var tmp=JSON.stringify(MakeTowers());
				var bTmp = JSON.stringify(b);
				
				if (bTmp==tmp){alert('you win!');}
			}
			if (c.length==$scope.Layers){
				
				var tmp=JSON.stringify(MakeTowers());
				var cTmp = JSON.stringify(c);
				
				if (cTmp==tmp){alert('you win!');}
			}
		}
		
		function ProcessClick(num){
			//console.log(num);
			
			if ($scope.Sel1==-1){
				$scope.Sel1=num;
			}else{
				$scope.MoveCount++;
				var x= $scope.towers[$scope.Sel1][0];
				var y = $scope.towers[num][0];
				var xlen = x.length;
				var ylen=y.length;
				if ((xlen<ylen)||(y=='_')){
					var item = $scope.towers[$scope.Sel1].shift();
					if ($scope.towers[$scope.Sel1].length==0){$scope.towers[$scope.Sel1].push('_');}
					if(y=='_'){$scope.towers[num].pop();}
					$scope.towers[num].unshift(item);
				}else{alert ('Illegal move.');}
				
			
			
				$scope.Sel1=-1;
			}
			
			CheckSolution();
		}
		
		
	}
	
}
)();