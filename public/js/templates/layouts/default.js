require(['jquery', 'bootstrap'], function ($) {

  function HeaderViewModel() {
    var self = this;
  }

  var vm = new HeaderViewModel();
  $('[header-bindable]').each(function(){
    ko.applyBindings(vm, this);
  })

})
