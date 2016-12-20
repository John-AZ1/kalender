var d = new Date();
// var month = d.getMonth();
var month = 1;
var monthele = document.getElementById('month');
var heading = document.getElementById('heading');
var day = document.getElementsByClassName('day');
var day30 = document.getElementsByClassName('day30');

switch (month) {
  case 11:
    heading.innerHTML = "December";
    break;
  case 10:
    heading.innerHTML = "November";
    break;
  case 9:
    heading.innerHTML = "October";
    break;
  case 8:
    heading.innerHTML = "September";
    break;
  case 7:
    heading.innerHTML = "August";
    break;
  case 6:
    heading.innerHTML = "July";
    break;
  case 5:
    heading.innerHTML = "June";
    break;
  case 4:
    heading.innerHTML = "May";
    break;
  case 3:
    heading.innerHTML = "April";
    break;
  case 2:
    heading.innerHTML = "March";
    break;
  case 1:
    heading.innerHTML = "Febuary";
    monthele.removeChild(day[28]);
    monthele.removeChild(day[29]);
    monthele.removeChild(day30[0]);
    break;
  case 0:
    heading.innerHTML = "January";
    break;
  default:

}
