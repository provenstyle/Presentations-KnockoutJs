require([], function () {

   $(function () {

      var vm = function () {
         var first = ko.observable(''),
             last = ko.observable(''),
             fullName = ko.computed(function () {
                return first() + " " + last();
             }, this),
             hideWelcome = ko.computed(function () {
                return !first() && !last();
             }, this);

         return {
            first: first,
            last: last,
            fullName: fullName,
            hideWelcome: hideWelcome
         };
      };

      ko.applyBindings(vm());
   });

});