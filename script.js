const root = document.getElementById("countdown");

var countDownDate = new Date("July 07, 2022 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  root.innerHTML = `
    <div class="top">
        <div class="days">${days}</div>
        <p> : </p>
        <div class="hours">${hours}</div>
        <p> : </p>
        <div class="minutes">${minutes}</div>
        <p> : </p>
        <div class="seconds">${seconds}</div>
    </div>
    
    <div class="bottom">
        <p>days</p>
        <p>hours</p>
        <p>minutes</p>
        <p>seconds</p>
    </div>
  `;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = `<div id="end">
        <p>Chúc bạn thi tốt, bạn đã nỗ lực đến như vậy, </p> 
        <p>chúc bạn may mắn, bình tĩnh tự tin đạt kết quả cao nhé,</p> 
        <h1>yêu bạn nhiều</h1>
    </div>`;
  }
}, 1000);
