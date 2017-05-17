requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
      'views':     '../views',
      'jquery': '/js/lib/jquery',
      'tether': '/js/lib/tether',
      'bootstrap': '/js/lib/bootstrap',
    },
    shim: {
      'views': {
        deps: ['bootstrap']
      },
      'bootstrap': {
        deps: ['jquery', 'tether']
      },
      'tether': {
        exports: 'Tether'
      },
      'jquery': {
        exports: '$'
      }
    }
});

// Start the main app logic.
requirejs(['tether'], function(Tether) {
  window.Tether = Tether;
});
