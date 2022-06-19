var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit event
form.addEventListener('submit',addItem);
//Delete event
itemsList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup',filterItems);
//Add Item Function
function addItem(e){
    e.preventDefault();
    //Get input value
    var newItem = document.getElementById('item').value;
    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create Delete button element
    var deleteBtn = document.createElement('button');
    //Add classess to Delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text to btn
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to li
    li.appendChild(deleteBtn);
    //Append li to list
    itemsList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are you Sure?")){
            var li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}

//Filter Items
function filterItems(e){
    //convert text to lovercase
    var text = e.target.value.toLowerCase();
    //Get List
    var items = itemsList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display ='block';
        }else{
            item.style.display ='none';
        }
    });
}