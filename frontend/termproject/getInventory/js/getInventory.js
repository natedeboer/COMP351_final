function newLine(i){
  //Create a blank line for inventory
  const blankLine = '<div id="item' + i + '">' + '</div>' + '<br>';

  // Append the next line to the former div
  const anotherLine = document.createElement('div');
  anotherLine.innerHTML = blankLine;
  listAll.appendChild(anotherLine);
}

function getInventory(){
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.crazymuppets.com/COMP351/API/v1/getInventory", true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        inventoryList = JSON.parse(this.responseText);
        if(inventoryList.length == 0){
            alert("There are no items in inventory");
        }
        else{
            for(j = 0; j < inventoryList.length; j++){
              newLine(inventoryList[j].collectionId);
              document.getElementById("item" + inventoryList[j].collectionId).textContent = "Item ID: " + inventoryList[j].itemId + ' | ' + "Quantity: " +inventoryList[j].quantity + ' | ' + "Store ID: " +inventoryList[j].storeId;
            }
        }
    }
  }
}