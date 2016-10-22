function ContactController() {
  var vm = this;

  vm.name = 'Callie';
  vm.email = 'callie@email.com';
  vm.phone = '555-867-5309';
 
  this.changeName = function () {
    vm.name = 'Cal'
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);