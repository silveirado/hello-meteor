Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
	angular
	.module("helloMeteor")
	.controller("indexController", index);

	function index($scope, $reactive) {
		var reativeContext = $reactive(this).attach($scope);
		this.subscribe('messages');
		$scope.hello = "Hello World - 2!!!";

		$scope.helpers({
	  	messages: function() {
	    	return Messages.find({});
	  	}
		});

		$scope.addMessage = function (mensagem) {
			Meteor.call('addMessage', mensagem);
		};
	}
}

if (Meteor.isServer) {
  Meteor.publish('messages', function () {
    return Messages.find();
  });
}


Meteor.methods({
  addMessage: function (text) {
    Messages.insert({
      text: text,
      createdAt: new Date()
    });
  }
});
