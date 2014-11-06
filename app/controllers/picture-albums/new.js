import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		save: function() {
			var _this = this;
			this.get('model').save().then(function(album) {
				_this.transitionToRoute("picture-albums.show", album);
			});
		},
		cancel: function() {
			this.transitionToRoute("picture-albums.index");
			return false;
		}
	}
});
