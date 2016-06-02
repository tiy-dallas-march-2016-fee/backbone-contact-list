if (window.ContactList === undefined) { window.ContactList = {}; }

(function(context) {

  var ContactItemView = Backbone.View.extend({
    tagName: 'tr',
    
    initialize: function() {
      console.log(this);
      this.render();
    },


    render: function() {
        var $rowTemplate = $('#row-template').html();
        var templateFunc =  _.template($rowTemplate);
        var html = templateFunc({
          firstName: this.model.get('firstName'),
          lastName: this.model.get('lastName'),
          email: this.model.get('email'),
          gender: this.model.get('gender')
        });
      this.$el.html(html);
      return this;
    }


  });

  context.ContactItemView = ContactItemView;

})(window.ContactList)
