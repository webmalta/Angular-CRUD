var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	
	//criando as rotas com ngRoute
	$routeProvider
	.when('/', {
		templateUrl: 'views/list.html',
		controller: 'listCtrl'
	})

	.when('/edit/:name', {
		templateUrl: 'views/edit.html',
		controller: 'editCtrl'
	})

	.when('/novo', {
		templateUrl: 'views/form.html',
		controller: 'novoCtrl'
	})

	.otherwise({ redirectTo: '/' });

}]);

//criando escopo global onde todos tem acesso = $rootScope
app.run(['$rootScope',function ($rootScope) {
		$rootScope.clientes = ['marcosmalta', 'andre', 'lilian', 'marta'];
		console.log('app.run');
}]);