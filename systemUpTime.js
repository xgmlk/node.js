const os = require('os');

function upTime() {
  let sec = os.uptime;
  calcToH();

  function calcToH() {
    let hour = Math.floor(sec / 60) / 60;
    let hourParse = Math.floor(hour * 10 / 10)
    let min = Math.floor((hour - hourParse) * 60) * 10 / 10
    console.log(`${hourParse} Часов ${min} Минут `);
  }
}

upTime();