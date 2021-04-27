function newItemObj(itemName, itemDesc, itemPrice){
    this.itemName = itemName;
    this.itemDesc = itemDesc;
    this.itemPrice = itemPrice;
}

function createItem(){
    let itemArray = [];
    
    try{
        let newItemName = document.getElementById("itemName").value;
        let newItemDesc = document.getElementById("itemDesc").value;
        let newItemPrice = document.getElementById("itemPrice").value;

        if(newItemName.trim().length == 0 || newItemDesc.trim().length == 0 || newItemPrice.trim().length == 0){
            throw "You cannot leave any fields empty";
        }
        
        if(isNaN(newItemPrice)){
            throw "Price must be a number";
        }
        
        else{
            let newItem = new newItemObj(document.getElementById("itemName").value, document.getElementById("itemDesc").value, parseFloat(document.getElementById("itemPrice").value));
            itemArray.push(newItem);
        }

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://www.crazymuppets.com/COMP351/API/v1/createItem", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(JSON.stringify(itemArray));

        alert("Item has been created.");
    }
    
    catch(err){
        alert(err);
    }
}