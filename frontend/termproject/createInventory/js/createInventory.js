function newItemObj(itemId, storeId, quantity){
    this.itemId = itemId;
    this.storeId = storeId;
    this.quantity = quantity;
}

function createInventory(){
    let itemArray = [];
    
    try{
        let newItemId = document.getElementById("itemId").value;
        let newstoreId = document.getElementById("storeId").value;
        let newQuantity = document.getElementById("quantity").value;

        if(newItemId.trim().length == 0 || newstoreId.trim().length == 0 || newQuantity.trim().length == 0){
            throw "You cannot leave any fields empty";
        }
        
        if(isNaN(newItemId) || isNaN(newstoreId) || isNaN(newQuantity)){
            throw "All fields must be numbers";
        }
        
        else{
            let newInventory = new newItemObj(parseFloat(document.getElementById("itemId").value), parseFloat(document.getElementById("storeId").value), parseFloat(document.getElementById("quantity").value));
            itemArray.push(newInventory);
        }

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://www.crazymuppets.com/COMP351/API/v1/createInventory", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(JSON.stringify(itemArray));

        alert("Inventory has been created.");
    }
    
    catch(err){
        alert(err);
    }
}