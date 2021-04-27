function newItemObj(storeName, storeDesc, storeAddress){
    this.storeName = storeName;
    this.storeDesc = storeDesc;
    this.storeAddress = storeAddress;
}

function createStore(){
    let itemArray = [];
    
    try{
        let newStoreName = document.getElementById("storeName").value;
        let newStoreDesc = document.getElementById("storeDesc").value;
        let newStoreAddress = document.getElementById("storeAddress").value;

        if(newStoreName.trim().length == 0 || newStoreDesc.trim().length == 0 || newStoreAddress.trim().length == 0){
            throw "You cannot leave any fields empty";
        }
        
        else{
            let newItem = new newItemObj(document.getElementById("storeName").value, document.getElementById("storeDesc").value, document.getElementById("storeAddress").value);
            itemArray.push(newItem);
        }

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://www.crazymuppets.com/COMP351/API/v1/createStore", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(JSON.stringify(itemArray));

        alert("Store has been created.");
    }
    
    catch(err){
        alert(err);
    }
}