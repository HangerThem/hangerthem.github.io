function startTime() {
  var today = new Date();
  var h = today.getHours();
  var min = today.getMinutes();
  var n = today.getUTCDay();
  var s = today.getSeconds();
  var d = today.getDate();
  var mon = today.getMonth();
  var y = today.getFullYear();
  if(n == 1) {
    n = "MON";
  } else if(n == 2)  {
    n = "TUE";
  } else if(n == 3)  {
    n = "WED";
  } else if(n == 4)  {
    n = "THU";
  } else if(n == 5)  {
    n = "FRI";
  } else if(n == 6)  {
    n = "SAT";
  } else if(n == 7)  {
    n = "SUN";
  }
  min = checkTime(min);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + min + ":" + s;
  document.getElementById('date').innerHTML = n + " " + d + "/" + mon + "/" + y;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function alertOpen() {
  alert("Sorry, I don't want to link my poor social media here.");
}
