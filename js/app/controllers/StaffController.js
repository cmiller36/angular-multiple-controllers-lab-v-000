function StaffController() {
  var vm = this;

  vm.name = 'Piper';
  vm.email = 'piper@email.com';
  vm.phone = '555-123-4567';
}

angular
  .module('app')
  .controller('StaffController', StaffController);