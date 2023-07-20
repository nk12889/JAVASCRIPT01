document.addEventListener('DOMContentLoaded', function() {
    const itemsList = document.getElementById('items');
    const filterInput = document.getElementById('filter');
    const addForm = document.getElementById('addForm');
    const itemInput = document.getElementById('item');
    const descriptionInput = document.getElementById('description');

    // Function to handle the delete action
    function handleDelete(event) {
        if (event.target.classList.contains('delete')) {
            const listItem = event.target.parentElement;
            itemsList.removeChild(listItem);
        }
    }

    // Function to handle the edit action (not implemented in this code)
    function handleEdit(event) {
        // You can implement the edit functionality here.
    }

    // Function to filter items based on the search string
    function filterItems(event) {
        const searchText = event.target.value.toLowerCase();
        const items = itemsList.getElementsByTagName('li');

        Array.from(items).forEach(function(item) {
            const itemName = item.textContent.toLowerCase();
            const description = item.dataset.description.toLowerCase();
            if (itemName.indexOf(searchText) !== -1 || description.indexOf(searchText) !== -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Function to add a new item to the list
    function addItem(event) {
        event.preventDefault();

        const newItemName = itemInput.value.trim();
        const newDescription = descriptionInput.value.trim();

        if (newItemName === '') {
            return;
        }

        const newListItem = document.createElement('li');
        newListItem.className = 'list-group-item';
        newListItem.dataset.description = newDescription;
        newListItem.innerHTML = `
            ${newItemName} <button class="btn btn-danger btn-sm float-right delete">X</button>
            <p>${newDescription}</p>
        `;

        itemsList.appendChild(newListItem);

        // Clear input fields
        itemInput.value = '';
        descriptionInput.value = '';
    }

    // Add click event listener to the items list to handle delete and edit actions
    itemsList.addEventListener('click', function(event) {
        handleDelete(event);
        handleEdit(event);
    });

    // Add input event listener to the filter input to filter items
    filterInput.addEventListener('input', filterItems);

    // Add submit event listener to the addForm to add new items
    addForm.addEventListener('submit', addItem);
});
document.addEventListener('DOMContentLoaded', function() {
    const itemsList = document.getElementById('items');
    const filterInput = document.getElementById('filter');
    const addForm = document.getElementById('addForm');
    const itemInput = document.getElementById('item');
    const descriptionInput = document.getElementById('description');

    // Function to handle the delete action
    function handleDelete(event) {
        if (event.target.classList.contains('delete')) {
            const listItem = event.target.parentElement;
            itemsList.removeChild(listItem);
        }
    }

    // Function to handle the edit action (not implemented in this code)
    function handleEdit(event) {
        // You can implement the edit functionality here.
    }

    // Function to filter items based on the search string
    function filterItems(event) {
        const searchText = event.target.value.toLowerCase();
        const items = itemsList.getElementsByTagName('li');

        Array.from(items).forEach(function(item) {
            const itemName = item.textContent.toLowerCase();
            const description = item.dataset.description.toLowerCase();
            if (itemName.indexOf(searchText) !== -1 || description.indexOf(searchText) !== -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Function to add a new item to the list
    function addItem(event) {
        event.preventDefault();

        const newItemName = itemInput.value.trim();
        const newDescription = descriptionInput.value.trim();

        if (newItemName === '') {
            return;
        }

        const newListItem = document.createElement('li');
        newListItem.className = 'list-group-item';
        newListItem.dataset.description = newDescription;
        newListItem.innerHTML = `
            ${newItemName} <button class="btn btn-danger btn-sm float-right delete">X</button>
            <p>${newDescription}</p>
        `;

        itemsList.appendChild(newListItem);

        // Clear input fields
        itemInput.value = '';
        descriptionInput.value = '';
    }

    // Add click event listener to the items list to handle delete and edit actions
    itemsList.addEventListener('click', function(event) {
        handleDelete(event);
        handleEdit(event);
    });

    // Add input event listener to the filter input to filter items
    filterInput.addEventListener('input', filterItems);

    // Add submit event listener to the addForm to add new items
    addForm.addEventListener('submit', addItem);
});
