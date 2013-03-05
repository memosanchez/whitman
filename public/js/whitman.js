(function($) {
  window.Whitman = {};

  Whitman.Model = Backbone.Model.extend({
    defaults: {
      document: null
    },

    initialize: function() {
      this.set('document', new Document());
    }
  });

  Whitman.View = Backbone.View.extend({
    el: 'body',

    initialize: function() {
      _.bindAll(this);

      this.input = new DocumentInputView({ model: this.model.get('document') });
      this.output = new DocumentOutputView({ model: this.model.get('document') });
      this.model.get('document').fetch({
        success: this.render
      });
    },

    render: function() {
      this.input.render();
      this.output.render();
      return this;
    }
  });

  window.Whitman = new Whitman.View({ model: new Whitman.Model() });

})(jQuery);