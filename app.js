if (window.ContactList === undefined) { window.ContactList = {}; }

(function(context) {

  var list = [
    new context.ContactItem({ firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', gender: 'M' }),
    new context.ContactItem({ firstName: 'George', lastName: 'Jetson', email: 'george@thefuture.com', gender: 'M' }),
    new context.ContactItem({ firstName: 'Kitiara', lastName: 'Uth Matar', email: 'fighter@dragonlance.com', gender: 'F' }),
    new context.ContactItem({ firstName: 'Diana', lastName: '(of) Themyscira', email: 'lady@theamazons.com', gender: 'F' }),
  ];

  //TODO: use this data


  console.log('context', context);

})(window.ContactList)
