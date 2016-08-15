import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcements');
  },
  actions: {
    destroyAnnouncement(announcements) {
      announcements.destroyRecord();
      this.transitionTo('admin');
    },
    saveAnnouncement() {

      var params = {
        title: this.get('title'),
        text: this.get('announce-text'),
      };
      var newAnnouncement = this.store.createRecord('announcements', params);
      newAnnouncement.save();
      this.transitionTo('admin');
    }
  }
});
