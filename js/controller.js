
app.controller('listCtrl', function ($scope) {
	//console.log('listCtrl');	
});

app.controller('editCtrl', function ($scope, $routeParams, $location) {
	//console.log('editCtrl');

	//aplicando titulo do controller
	$scope.title = 'Editar Cliente';

	//pego a parametro name ao editar
	$scope.cliente = $routeParams.name;

	//obtendo o indice no array
	$scope.clienteIndex = $scope.clientes.indexOf($scope.cliente);

	$scope.salvar = function() {
		$scope.clientes[$scope.clienteIndex] = $scope.cliente;
		$location.path('/');
	}
	
});

app.controller('novoCtrl', function ($scope, $routeParams, $location) {
	
	//console.log('novoCtrl');

	$scope.title = 'Novo Cliente';
	$scope.cliente = '';

	$scope.salvar = function() {
		$scope.clientes.push($scope.cliente);
		$location.path('/');
	}
	
});

/*app.controller('userController', function ($scope) {
		$scope.user = {name:'Marcos Malta'}	
});*/

/*
add ++ count
app.controller('countController', function ($scope) {
		$scope.counter = 0;

		$scope.add = function() {
			$scope.counter++;
		};
});*/