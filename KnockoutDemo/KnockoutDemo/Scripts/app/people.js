require([], function() {

   var person = function(name) {
      this.name = name;
   };

   var vm = function() {

      var name = ko.observable();
      
      var add = function() {
         people.push(new person(name()));
      };

      var people = ko.observableArray([
            new person('justin'),
            new person('kenny'),
            new person('nik')
      ]);
      
      var selectedPerson = ko.observable(people()[0]);

      var select = function(person) {
         selectedPerson(person);
      };

      return {
         name: name,
         add:add,
         people: people,
         selectedPerson:selectedPerson,
         select:select
      };
   };

   ko.applyBindings(vm());

});