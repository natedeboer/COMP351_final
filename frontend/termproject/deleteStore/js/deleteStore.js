function newItemObj(storeId){
    this.storeId = storeId;
}

function deleteStore(){
    let itemArray = [];
    
    try{
        let newStoreId = document.getElementById("storeId").value;

        if(newStoreId.trim().length == 0){
            throw "You cannot leave this field empty";
        }
        
        else{
            let deleteStore = new newItemObj(parseFloat(document.getElementById("storeId").value));
            itemArray.push(deleteStore);
        }

        let xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "https://www.crazymuppets.com/COMP351/API/v1/deleteStore", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(JSON.stringify(itemArray));

        alert("Store ID " + itemArray[0].storeId + " has been deleted.");
    }
    
    catch(err){
        alert(err);
    }
}