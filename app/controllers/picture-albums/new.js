import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		addPicture: function() {
			this.get('model').set('pictures', this.get('model').pictures || []);
			this.get('model').get('pictures').pushObject({
				name: '',
				description: '',
				width: 0,
				height: 0,
				url :''
			});
		}
	}
});
