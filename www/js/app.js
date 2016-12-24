(function() {

var app = angular.module('starter', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider.state('list',{
		url:'/list',
		templateUrl: 'templates/list.html'
	});
	
	$stateProvider.state('edit',{
		url:'/edit/:noteId',
		templateUrl: 'templates/edit.html'
	});
	
	$urlRouterProvider.otherwise('/list');

});

var notes = [
  {
		id: '1',
	  title: 'First Note',
		description:'This is my first note.'
	},
	{
		id: '2',
		title: 'Second Note',
		description:'This is my second note.'
	}
];
		
function getNote(noteId){
	for(var i=0; i<notes.length; i++){
		if(notes[i].id === noteId){
			return notes[i];		
		}
	}
	return undefined;
}

app.controller('ListCtrl', function($scope) {
	
	$scope.notes = notes;
		
});

app.controller('EditCtrl', function($scope, $state){

	$scope.note = getNote($state.params.noteId);
	
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

}());
