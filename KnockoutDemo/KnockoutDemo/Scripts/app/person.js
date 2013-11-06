require([], function () {

   $(function () {

      var vm = function () {
         var first = "Richard";
             last = "Castle";             

         return {
            first: first,
            last: last,            
         };
      };

      ko.applyBindings(vm());
   });

});