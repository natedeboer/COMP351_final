function newItemObj(itemId){
    this.itemId = itemId;
}

function deleteItem(){
    let itemArray = [];
    
    try{
        let newItemId = document.getElementById("itemId").value;

        if(newItemId.trim().length == 0){
            throw "You cannot leave this field empty";
        }
        
        else{
            let deleteItem = new newItemObj(parseFloat(document.getElementById("itemId").value));
            itemArray.push(deleteItem);
        }

        let xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "https://www.crazymuppets.com/COMP351/API/v1/deleteItem", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(JSON.stringify(itemArray));

        alert("Item ID " + itemArray[0].itemId + " has been deleted.");
    }
    
    catch(err){
        alert(err);
    }
}