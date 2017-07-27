window.onload = function(){
  window.event? window.event.cancelBubble = true : e.stopPropagation();
  // document.documentElement.requestFullScreen();
  screen.orientation.lock("portrait-primary");
}
