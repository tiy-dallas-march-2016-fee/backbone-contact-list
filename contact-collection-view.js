if (window.ContactList === undefined) { window.ContactList = {}; }

(function(context) {

  var ContactCollectionView = Backbone.View.extend({
    

    initialize: function() {
      this.render();
    },



    render: function() {
      var self = this;

      this.model.forEach(function(person){
        var subview = new context.ContactItemView({ model: person });
        self.$el.append(subview.render().el);
      });
    }
  });

  context.ContactCollectionView = ContactCollectionView;

})(window.ContactList)
