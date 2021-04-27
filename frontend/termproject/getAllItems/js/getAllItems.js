function newLine(i){
  //Create a blank line for inventory
  const blankLine = '<div id="item' + i + '">' + '</div>' + '<br>';

  // Append the next line to the former div
  const anotherLine = document.createElement('div');
  anotherLine.innerHTML = blankLine;
  listAll.appendChild(anotherLine);
}

function getAllItems(){
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://crazymuppets.com/COMP351/API/v1/getAllItems", true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      itemList = JSON.parse(this.responseText);
        if(itemList.length == 0){
            alert("There are no items");
        }
        else{
            for(j = 0; j < itemList.length; j++){
              newLine(itemList[j].itemId);
              document.getElementById("item" + itemList[j].itemId).textContent = "Item ID: " + itemList[j].itemId + ' | ' + "Item Name: " +itemList[j].itemName + ' | ' + "Item Description: " +itemList[j].itemDesc + ' | ' + "Item Price: $" +itemList[j].itemPrice;
            }
        }
    }
  }
}