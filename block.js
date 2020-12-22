function selectBlock(blockName){
    document.getElementById("image").src = "assets/image/"+blockName.substr(0,6)+"/"+blockName+".png";

    //check Block
    var question = document.getElementById("questionBlock");
    if (blockName) {
        question.className="checkBlock";
    }
    var text = document.getElementById('blockType');
    text.style.textTransform = "capitalize";
    text.innerHTML = blockName;
}

// block A 
listOfProducts ="";
for (let a = 2; a < 6; a++) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioA${a}" name="block" value="blockA${a}"/>
        <label for="myradioA${a}" onclick="selectBlock(this.control.value);"><img src="https://www.les-boites-aux-lettres.fr/media/swatches/type_a${a}.jpg" /></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}
// block B 
for (let b = 2; b < 11; b+=2) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioB${b}" name="block" value="blockB${b}"/>
        <label for="myradioB${b}" onclick="selectBlock(this.control.value);"><img src="https://www.les-boites-aux-lettres.fr/media/swatches/type_b${b}.jpg" /></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}
// block C
for (let c = 3; c < 16; c+=3) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioC${c}" name="block" value="blockC${c}"/>
        <label for="myradioC${c}" onclick="selectBlock(this.control.value);"><img src="https://www.les-boites-aux-lettres.fr/media/swatches/type_c${c}.jpg" /></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}
// block D
for (let d = 4; d < 21; d+=4) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioD${d}" name="block" value="blockD${d}"/>
        <label for="myradioD${d}" onclick="selectBlock(this.control.value);"><img src="https://www.les-boites-aux-lettres.fr/media/swatches/type_d${d}.jpg" /></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}

