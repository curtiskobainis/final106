function SaveItem(){
    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    ShowAll();

}

function ModifyItem(){
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.getItem(name);
    localStorage.getItem(name);
    ShowAll();
}

function RemoveItem(){
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.removeItem(name);
    localStorage.removeItem(name);
    ShowAll();
}

function ClearAll(){
    localStorage.clear();
    ShowAll();
} 

function ShowAll(){
    if (ChkBr()){
        var key ="";
        var list = "";
        var i =0;
        for (i=0; i<=localStorage.length - 1; i++){
            key = localStorage.key(i);
            list +="<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
        }
        document.getElementById('list').innerHTML = list;        
    }else{
        alert("Cannot Store shopping. Your Browser does not support local storage.")
    }
}

function ChkBr() {
    if ('localStorage' in window && window ['localStorage'] !== null){
        console.log ('local storage is working');
        return true;
    }else{
        return false;
    }
 
}