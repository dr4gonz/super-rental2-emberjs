import Ember from 'ember';

export default Ember.Component.extend({
  showCityForm: false,
  actions: {
    showNewCityForm() {
      this.set('showCityForm', true);
    },
    saveCity() {
      var params = {
        name: this.get('name'),
        country: this.get('country'),
      };
      this.set('showCityForm', false);
      this.sendAction('saveCity', params);
    }
  }

});
