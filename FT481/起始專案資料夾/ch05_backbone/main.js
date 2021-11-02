$(function() {
	var MyView = Backbone.View.extend({
		render: function() {
			this.$el.text('Hello Backbone.js!');
			return this;
		}
	});

	var myView = new MyView();

	$('#msg').append(myView.render().$el);

});