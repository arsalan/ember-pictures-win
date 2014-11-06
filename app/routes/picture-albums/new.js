import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('picture-album');
	},
	actions: {
		save: function() {
			var _this = this;
			this.modelFor(this.routeName).save().then(function(album) {
				_this.transitionTo("picture-albums.show", album);
			});
		},
		cancel: function() {
			this.transitionTo("picture-albums.index");
			return false;
		}
	}
});
