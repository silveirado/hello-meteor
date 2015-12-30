	angular
	.module("helloMeteor", ['angular-meteor', 'ui.router']);

	Meteor.startup(init);

	function init(){
		angular.bootstrap(document, ["helloMeteor"]);
	}
