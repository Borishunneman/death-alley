(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){

    var menuBut1 = document.getElementById('menu-button-1');
    var menuBut2 = document.getElementById('menu-button-2');
    var menuBut3 = document.getElementById('menu-button-3');
    var menuBut4 = document.getElementById('menu-button-4');

    menuBut1.addEventListener("click", function()
      {window.location.href = "/";
      })

    menuBut2.addEventListener("click", function()
      {window.location.href = "/music";
      })

    menuBut3.addEventListener("click", function()
      {window.location.href = "/tour";
      })

    menuBut4.addEventListener("click", function()
      {window.location.href = "/merchandise";
      })




  }
})(window, document, undefined);
