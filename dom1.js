// console.log(document.forms)
// console.log(document.links)
// console.log(document.childNodes)
// console.log(document.children)


// console.log(document.getElementById("header-title"))
// var title = document.getElementById("header-title")
// title.style.backgroundColor="red"
// title.textContent="Unique Element"
// title.innerHTML = "<h3>HELLO</h3>"
// title.style.borderBlockEndColor = "solid 3px #000"

// console.log(document.getElementsByClassName("list-group-item"))
// var items = document.getElementsByClassName("list-group-item")
// // console.log(item[2])
// items[1].textContent="My Hero"
// // items[1].style.backgroundColor = "yellow"
// for(let i=0; i<items.length;i++){
//     items[i].style.fontWeight="bold"
// }

///get elemnt by tag name
// var tag = document.getElementsByTagName("li")
// // console.log(tag);
// for(let i=0;i<tag.length;i++){
//     tag[i].style.backgroundColor="red"
// }

//2nd item have green color and 3rd item invisible
// var items=document.getElementsByClassName("list-group-item");
// console.log("list-group-item");
// items[1].style.backgroundColor="green"
// items[2].style.display="none"

// var itemlist=document.querySelector('#items');
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor="#f1f2"
// console.log(itemlist.parentNode.parentNode)
// itemlist.backgroundColor="yelllow"



// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }