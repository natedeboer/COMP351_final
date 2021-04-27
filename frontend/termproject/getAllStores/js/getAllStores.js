function newLine(i){
  //Create a blank line for inventory
  const blankLine = '<div id="item' + i + '">' + '</div>' + '<br>';

  // Append the next line to the former div
  const anotherLine = document.createElement('div');
  anotherLine.innerHTML = blankLine;
  listAll.appendChild(anotherLine);
}

function getAllStores(){
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://crazymuppets.com/COMP351/API/v1/getAllStores", true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        storeList = JSON.parse(this.responseText);
        if(storeList.length == 0){
            alert("There are no items in inventory");
        }
        else{
            for(j = 0; j < storeList.length; j++){
              newLine(storeList[j].storeId);
              document.getElementById("item" + storeList[j].storeId).textContent = "Store ID: " + storeList[j].storeId + ' | ' + "Store Name: " + storeList[j].storeName + ' | ' + "Store Description: " + storeList[j].storeDesc + ' | ' + "Store Address: " + storeList[j].storeAddress;
            }
        }
    }
  }
}