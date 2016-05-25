if (window.ContactList === undefined) { window.ContactList = {}; }

(function(context) {

  var ContactCollection = Backbone.Collection.extend({

  });

  context.ContactCollection = ContactCollection;

})(window.ContactList)
