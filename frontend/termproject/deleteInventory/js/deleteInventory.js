function newItemObj(itemId, storeId){
    this.itemId = itemId;
    this.storeId = storeId;
}

function deleteInventory(){
    let itemArray = [];
    
    try{
        let newItemId = document.getElementById("itemId").value;
        let newstoreId = document.getElementById("storeId").value;

        if(newItemId.trim().length == 0 || newstoreId.trim().length == 0){
            throw "You cannot leave any fields empty";
        }
        
        if(isNaN(newItemId) || isNaN(newstoreId)){
            throw "All fields must be numbers";
        }
        
        else{
            let deleteInventory = new newItemObj(parseFloat(document.getElementById("itemId").value), parseFloat(document.getElementById("storeId").value));
            itemArray.push(deleteInventory);
        }

        let xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "https://www.crazymuppets.com/COMP351/API/v1/deleteInventory", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(JSON.stringify(itemArray));

        alert("Inventory has been deleted.");
    }
    
    catch(err){
        alert(err);
    }
}