if (window.ContactList === undefined) { window.ContactList = {}; }

(function(context) {

  var list = [
    new context.ContactItem({ firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', gender: 'M' }),
    new context.ContactItem({ firstName: 'George', lastName: 'Jetson', email: 'george@thefuture.com', gender: 'M' }),
    new context.ContactItem({ firstName: 'Kitiara', lastName: 'Uth Matar', email: 'fighter@dragonlance.com', gender: 'F' }),
    new context.ContactItem({ firstName: 'Diana', lastName: '(of) Themyscira', email: 'lady@theamazons.com', gender: 'F' }),
  ];

  //TODO: use this data

//  var people = new context.ContactItem();
  var peoples = new context.ContactCollection(list);

  peoples.sort();

  var peopleView = new context.ContactCollectionView({el: $('tbody'), model: peoples});

  // You did not need this line of code because the loop through the collection does the job.
  //var personView = new context.ContactItemView({el: $('tr')});
  console.log(peoples.toJSON());

  console.log('context', context);

})(window.ContactList)
