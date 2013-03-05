var DocumentInputView = Backbone.View.extend({
  el: 'textarea.markdown',

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    $(this.el).val(this.model.get('body'));
    return this;
  },

  events: {
    'keyup': 'onKeyUp'
  },

  onKeyUp: function() {
    this.model.set('body', this.$el.val());
  }
});