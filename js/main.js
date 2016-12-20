var d = new Date();
var month = d.getMonth();
var day = d.getDate();
var monthele = document.getElementById('month');
var heading = document.getElementById('heading');
var dayele = document.getElementsByClassName('day');
var dayele30 = document.getElementsByClassName('day30');


switch (month) {
  case 11:
    heading.innerHTML = "December";
    break;
  case 10:
    heading.innerHTML = "November";
    monthele.removeChild(dayele[30]);
    break;
  case 9:
    heading.innerHTML = "October";
    break;
  case 8:
    heading.innerHTML = "September";
    monthele.removeChild(dayele[30]);
    break;
  case 7:
    heading.innerHTML = "August";
    break;
  case 6:
    heading.innerHTML = "July";
    break;
  case 5:
    heading.innerHTML = "June";
    monthele.removeChild(dayele[30]);
    break;
  case 4:
    heading.innerHTML = "May";
    break;
  case 3:
    heading.innerHTML = "April";
    monthele.removeChild(dayele[30]);
    break;
  case 2:
    heading.innerHTML = "March";
    break;
  case 1:
    heading.innerHTML = "Febuary";
    monthele.removeChild(dayele[28]);
    monthele.removeChild(dayele[29]);
    monthele.removeChild(dayele30[0]);
    break;
  case 0:
    heading.innerHTML = "January";
    break;
  default:
  heading.innerHTML = "Month";
}
switch (day) {
  case 1:
    dayele[0].style.backgroundColor = "#aae";
    break;
  case 2:
    dayele[1].style.backgroundColor = "#aae";
    break;
  case 3:
    dayele[2].style.backgroundColor = "#aae";
    break;
  case 4:
    dayele[3].style.backgroundColor = "#aae";
    break;
  case 5:
    dayele[4].style.backgroundColor = "#aae";
    break;
  case 6:
    dayele[5].style.backgroundColor = "#aae";
    break;
  case 7:
    dayele[6].style.backgroundColor = "#aae";
    break;
  case 8:
    dayele[7].style.backgroundColor = "#aae";
    break;
  case 9:
    dayele[8].style.backgroundColor = "#aae";
    break;
  case 10:
    dayele[9].style.backgroundColor = "#aae";
    break;
  case 11:
    dayele[10].style.backgroundColor = "#aae";
    break;
  case 12:
    dayele[11].style.backgroundColor = "#aae";
    break;
  case 13:
    dayele[12].style.backgroundColor = "#aae";
    break;
  case 14:
    dayele[13].style.backgroundColor = "#aae";
    break;
  case 15:
    dayele[14].style.backgroundColor = "#aae";
    break;
  case 16:
    dayele[15].style.backgroundColor = "#aae";
    break;
  case 17:
    dayele[16].style.backgroundColor = "#aae";
    break;
  case 18:
    dayele[17].style.backgroundColor = "#aae";
    break;
  case 19:
    dayele[18].style.backgroundColor = "#aae";
    break;
  case 20:
    dayele[19].style.backgroundColor = "#aae";
    break;
  case 21:
    dayele[20].style.backgroundColor = "#aae";
    break;
  case 22:
    dayele[21].style.backgroundColor = "#aae";
    break;
  case 23:
    dayele[22].style.backgroundColor = "#aae";
    break;
  case 24:
    dayele[23].style.backgroundColor = "#aae";
    break;
  case 25:
    dayele[24].style.backgroundColor = "#aae";
    break;
  case 26:
    dayele[25].style.backgroundColor = "#aae";
    break;
  case 27:
    dayele[26].style.backgroundColor = "#aae";
    break;
  case 28:
    dayele[27].style.backgroundColor = "#aae";
    break;
  case 29:
    dayele[28].style.backgroundColor = "#aae";
    break;
  case 30:
    dayele[29].style.backgroundColor = "#aae";
    break;
  case 31:
    dayele[30].style.backgroundColor = "#aae";
    break;
  default:

}
