$(function() {
  console.log("sup");
  var width = 100;
  var deltaWidth = -.5;
  setInterval(eraseText, 25);

  function eraseText()
  {
    $("#eraser").css("opacity", 1);
    width += deltaWidth;
    updateWidth($("#eraser"));
    if (width <= 0)
    {
      $("#eraser").css("opacity", 0);
    }
  }

  function updateWidth(jElement){
    jElement.width(`${width}%`);
  }
});
