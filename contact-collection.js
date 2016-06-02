if (window.ContactList === undefined) { window.ContactList = {}; }

(function(context) {

  var ContactCollection = Backbone.Collection.extend({
    initialize: function() {
      this.comparator = 'firstName';
    }


  });

  context.ContactCollection = ContactCollection;

})(window.ContactList)
