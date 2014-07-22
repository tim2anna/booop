angular.module('starter.controllers', [])

.controller('TabCtrl', function($scope, $ionicViewService, $state) {
	$scope.go_tab = function(url) {
		$state.go(url);
		$ionicViewService.clearHistory();
    };
})

.controller('HomeCtrl', function($scope) {
})

.controller('ServiceCtrl', function($scope) {
})

.controller('BaikeCtrl', function($scope, Baike) {
	$scope.baikes = Baike.all();
})

.controller('BaikeDetailCtrl', function($scope, $stateParams, Baike) {
	$scope.baike = Baike.get($stateParams.id);
})

.controller('InvestCtrl', function($scope, $ionicLoading, Invest) {
	// 所有的投资项目
	$scope.invests = Invest.all();
	$scope.page = 0;
	$scope.more_name = '加载更多';
	$scope.loading_args = {
		template: '<i class="icon ion-loading-c"></i>加载中...',
        delay: 0,
        duration: 1000
	};

	// 刷新投资项目
  	$scope.doRefresh = function() {
  		$ionicLoading.show($scope.loading_args);
      	$scope.invests = Invest.all(0);
		$scope.page = 0
		$scope.more_name = '加载更多';
		//Stop the ion-refresher from spinning
		$scope.$broadcast('scroll.refreshComplete');
	};

	$scope.more = function() {
		if($scope.more_name == '没有更多') return;
		$ionicLoading.show($scope.loading_args);
		$scope.page += 1;
		var new_items = Invest.all($scope.page);
		if(new_items.length == 0) {
			$scope.more_name = '没有更多';
		} else {
			$scope.invests = $scope.invests.concat(new_items);	
		}
	}
})

.controller('InvestDetailCtrl', function($scope, $stateParams, $ionicPopup, Invest) {
  $scope.invest = Invest.get($stateParams.id);

  	$scope.data = {}

	$scope.showPrompt = function () {
	 $ionicPopup.prompt({
	 	templateUrl: 'popup-template.html',
	   title: '<i class="balanced icon ion-bag padding-right"></i>您账户余额还有<span class="assertive"> 10000 </span>元',
	   scope: $scope,
	   buttons: [
	     {
	       text: '取消',
	       onTap: function (e) {
	         return true;
	       }
	     },
	     {
	       text: '<b>确定</b>',
	       type: 'button-positive',
	       onTap: function (e) {     	
	         return $scope.data.invest_money;
	       }
	        },
	      ]
	 }).then(function (res) {
	   console.log('You invest ￥', res);
	 });
	};
})

.controller('AccountCtrl', function($scope) {
});
