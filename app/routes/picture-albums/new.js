import PictureAlbumsBaseRoute from './base';

export default PictureAlbumsBaseRoute.extend({
	model: function() {
		return this.store.createRecord('picture-album');
	},
	actions: {
		cancel: function() {
			this.transitionTo("picture-albums.index");
			return false;
		}
	}
});
