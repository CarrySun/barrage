window.onload = function(params) {
  function Barrage(time, data) {
    this.time = time;
    this.data = data;
  }
  var barrages = [];

  var time = new Date();
  var data = "";
  var barrage;

  var submit = document.getElementById("submit");
  var barrageDiv = document.getElementById("barrageDiv");
  var list = document.getElementById("list");
  var clear = document.getElementById("clear");
  //1上
  //-1下
  var location = -1;
  var height = 30;
  var sum = Math.floor(540 / 30);
  var random = 0;
  var top = 0;
  clear.onclick = function () {
    list.innerHTML = ''
  }
  submit.onclick = function() {
    time = new Date();
    data = document.getElementById("content").value;
    if (data.trim() != "") {
      barrage = new Barrage(time, data);
      barrages.push(barrage);
      var div = document.createElement("div");
      switch (location) {
        case 1:
          random = parseInt(Math.random() * 3 + 1);
          break;
        case -1:
          random = parseInt(Math.random() * 3 + 13);
          break;
        case 0:
          random = parseInt(Math.random() * 15 + 1);
          break;
        default:
          random = parseInt(Math.random() * 15 + 1);
          break;
      }
      top = random * height + "px";
      div.className = "barrage";
      div.style.top = top;
      div.innerHTML = data;
      barrageDiv.appendChild(div);
      var listItem = document.createElement("div");
      listItem.className = "listItem";
      listItem.innerHTML = "CarrySun：" + data;
      list.appendChild(listItem);
      list.scrollTop = list.scrollHeight;
      setTimeout(function() {
        barrageDiv.removeChild(div);
      }, 5000);
      document.getElementById("content").value = "";
    }
  };
};
