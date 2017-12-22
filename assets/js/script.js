window.onload = function(){
  // Menu
  var menuToggle = document.getElementById("menuToggle"),
      $menu = document.getElementById("navbarMenu"),
      menuAberto = false;

  var toggleColor;

  menuToggle.addEventListener('click', function(){
    if(!menuAberto){
      // Container Menu
      $menu.style.width = '270px';
      $menu.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';

      // Toggle Menu
      this.style.color = "#f4f4f4";
      this.style.transform = "rotate(90deg)";
      menuAberto = true;
    } else {
      // Container Menu
      $menu.style.width = '0';
      $menu.style.clipPath = 'polygon(0 0, 80% 0%, 0 100%, 0% 100%';

      // Toggle Menu
      this.style.color = toggleColor;
      this.style.transform = "rotate(0)";
      menuAberto = false;
    }
  });

  $menu.addEventListener('touchmove', function(e){
    e.preventDefault();
  })

  this.onscroll = function(e){
    var yScroll = this.pageYOffset;

    if(yScroll >= 310){
      toggleColor = "#e74c3c"
    } else {
      toggleColor = "gray"
    }

    if(!menuAberto) {
      menuToggle.style.color = toggleColor;       
    }
  }
}
