function DrawPoint()
{

  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var color = document.getElementById("color").value;

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x-2,y-2,4,4);
}

function Clear()
{

  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var color = document.getElementById("color").value;

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,640,480);
}
