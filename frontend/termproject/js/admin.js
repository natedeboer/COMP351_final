function getStats(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://crazymuppets.com/COMP351/API/v1/adminPage", true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            statList = JSON.parse(this.responseText);
            document.getElementById("getItemStats").textContent = statList[0].getItem;
            document.getElementById("getInventoryStats").textContent = statList[0].getInventory;
            document.getElementById("getStoreStats").textContent = statList[0].getStore;
            document.getElementById("postStoreStats").textContent = statList[0].postStore;
            document.getElementById("deleteStoreStats").textContent = statList[0].deleteStore;
            document.getElementById("putInventoryStats").textContent = statList[0].putInventory;
            document.getElementById("postItemStats").textContent = statList[0].postItem;
            document.getElementById("deleteItemStats").textContent = statList[0].deleteItem;
            document.getElementById("postInventoryStats").textContent = statList[0].postInventory;
            document.getElementById("deleteInventoryStats").textContent = statList[0].deleteInventory;
        }
    }
}