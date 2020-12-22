let request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'assets/js/color.json', true);
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == "200") {
    var json = JSON.parse(request.responseText);
    var colorsBlock = json.colors;
    let colorStucture = '';
    // Ral stucture
    colorsBlock.forEach(colorBlock => {
      colorStucture += `
      <li>
          <input type="radio" id="myradioColor${colorBlock.category}" name="color" value="${colorBlock.color}"/>
          <label for="myradioColor${colorBlock.category}" onclick="checkColor(this.control.value);"><img src="assets/image/ral/${colorBlock.picture}" /></label>
      </li>`;
      document.getElementById('selectColor').innerHTML = colorStucture;
    });

    colorPortal ='';
    colorsBlock.forEach(colorBlockPortal => {
      colorPortal += `
      <li>
          <input type="radio" id="myradioColorPortal${colorBlockPortal.category}" name="colorPortal" value="${colorBlockPortal.color}"/>
          <label for="myradioColorPortal${colorBlockPortal.category}" onclick="checkColorPortal(this.control.value);"><img src="assets/image/ral/${colorBlockPortal.picture}" /></label>
      </li>`;
      document.getElementById('selectColorPortal').innerHTML = colorPortal;
    });
  }
};
request.send(null);
// check Color
function checkColor(colorName) {
  // document.getElementById("image").src = "assets/image/"+colorName.substr(0,6)+"/"+colorName+".png";

  //check Block
  var questionColor = document.getElementById("questionBlockColor");
  if (colorName) {
    questionColor.className = "checkColor";
  }
  var text = document.getElementById('blockColor');
  text.style.textTransform = "capitalize";
  text.innerHTML = colorName;
}

// check Color Portal
function checkColorPortal(colorNamePortal) {
  // document.getElementById("image").src = "assets/image/"+colorNamePortal.substr(0,6)+"/"+colorNamePortal+".png";

  //check Block
  var questionColorPortal = document.getElementById("questionPortillionColor");
  if (colorNamePortal) {
    questionColorPortal.className = "checkPortillionColor";
  }
  var text = document.getElementById('portillionColor');
  text.style.textTransform = "capitalize";
  text.innerHTML = colorNamePortal;
}