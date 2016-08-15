import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities:this.store.findAll('city'),
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcements')
    });
  },
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }

});
