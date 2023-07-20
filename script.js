// // document.addEventListener('DOMContentLoaded', function() {
// //     const userDetailsForm = document.getElementById('userDetailsForm');
  
// //     userDetailsForm.addEventListener('submit', function(event) {
// //       event.preventDefault();
  
// //       const nameInput = document.getElementById('name').value;
// //       const emailInput = document.getElementById('email').value;
// //       const ageInput = document.getElementById('age').value;
// //   JSON
// //       // Create an object to store the user details
// //       const userDetails = {
// //         name: nameInput,
// //         email: emailInput,
// //         age: ageInput,
// //       };
  
// //       // Store the user details object in the local storage
// //       localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
// //       // Clear the form inputs
// //       userDetailsForm.reset();
  
// //       alert('User details have been successfully stored in the local storage.');
// //     });
// //   });
// // document.addEventListener('DOMContentLoaded', function() {
// //     const userDetailsForm = document.getElementById('userDetailsForm');
  
// //     userDetailsForm.addEventListener('submit', function(event) {
// //       event.preventDefault();
  
// //       const nameInput = document.getElementById('name').value;
// //       const emailInput = document.getElementById('email').value;
// //       const ageInput = document.getElementById('age').value;
  
// //       // Create an object to store the user details
// //       const userDetails = {
// //         name: nameInput,
// //         email: emailInput,
// //         age: ageInput,
// //       };
  
// //       // Get existing user details from LocalStorage
// //       let existingUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
  
// //       // Add the new user details to the existing array
// //       existingUsers.push(userDetails);
  
// //       // Store the updated array of user details in the local storage
// //       localStorage.setItem('userDetails', JSON.stringify(existingUsers));
  
// //       // Clear the form inputs
// //       userDetailsForm.reset();
  
// //       alert('User details have been successfully stored in the local storage.');
// //     });
// //   });
  
// document.addEventListener('DOMContentLoaded', function() {
//     const userDetailsForm = document.getElementById('userDetailsForm');
//     const contactedList = document.getElementById('contactedList');
  
//     // Function to render the list of contacted people from local storage
//     function renderContactedPeople() {
//       contactedList.innerHTML = ''; // Clear the list before re-rendering
  
//       // Get existing contacted people from LocalStorage
//       const existingContactedPeople = JSON.parse(localStorage.getItem('contactedPeople')) || [];
  
//       existingContactedPeople.forEach(function(userDetails, index) {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//           <strong>${userDetails.name}</strong> (Email: ${userDetails.email}, Age: ${userDetails.age})
//           <button class="delete-btn" data-index="${index}">Delete</button>
//         `;
//         contactedList.appendChild(listItem);
//       });
//     }
  
//     userDetailsForm.addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       const nameInput = document
  

document.addEventListener('DOMContentLoaded', function() {
  const userDetailsForm = document.getElementById('userDetailsForm');
  const contactedList = document.getElementById('contactedList');
  const editFormContainer = document.getElementById('editFormContainer');
  const editForm = document.getElementById('editForm');
  const editEmailInput = document.getElementById('editEmail');

  // Function to render the list of contacted people from local storage
  function renderContactedPeople() {
    contactedList.innerHTML = ''; // Clear the list before re-rendering

    // Get existing contacted people from LocalStorage
    const existingContactedPeople = JSON.parse(localStorage.getItem('contactedPeople')) || [];

    existingContactedPeople.forEach(function(userDetails, index) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${userDetails.name}</strong> (Email: ${userDetails.email}, Age: ${userDetails.age})
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      contactedList.appendChild(listItem);
    });
  }

  userDetailsForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const ageInput = document.getElementById('age').value;

    // Create an object to store the user details
    const userDetails = {
      name: nameInput,
      email: emailInput,
      age: ageInput,
    };

    // Get existing contacted people from LocalStorage
    let existingContactedPeople = JSON.parse(localStorage.getItem('contactedPeople')) || [];

    // Add the new user details to the existing array
    existingContactedPeople.push(userDetails);

    // Store the updated array of contacted people in local storage
    localStorage.setItem('contactedPeople', JSON.stringify(existingContactedPeople));

    // Clear the form inputs
    userDetailsForm.reset();

    // Re-render the list of contacted people
    renderContactedPeople();

    alert('User details have been successfully stored in the local storage.');
  });

  // Function to handle the delete action
  function handleDelete(event) {
    if (event.target.classList.contains('delete-btn')) {
      const index = event.target.getAttribute('data-index');
      let existingContactedPeople = JSON.parse(localStorage.getItem('contactedPeople')) || [];

      // Remove the user at the specified index from the array
      existingContactedPeople.splice(index, 1);

      // Store the updated array of contacted people in local storage
      localStorage.setItem('contactedPeople', JSON.stringify(existingContactedPeople));

      // Re-render the list of contacted people
      renderContactedPeople();
    }
  }

  // Function to handle the edit action
  function handleEdit(event) {
    if (event.target.classList.contains('edit-btn')) {
      const index = event.target.getAttribute('data-index');
      let existingContactedPeople = JSON.parse(localStorage.getItem('contactedPeople')) || [];
      const userDetailsToEdit = existingContactedPeople[index];

      // Show the edit form with the current email ID pre-filled
      editEmailInput.value = userDetailsToEdit.email;
      editFormContainer.style.display = 'block';

      // Save the index of the user being edited in a custom attribute
      editForm.dataset.index = index;
    }
  }

  // Function to handle the edit form submission
  function handleEditFormSubmit(event) {
    event.preventDefault();

    const index = editForm.dataset.index;
    let existingContactedPeople = JSON.parse(localStorage.getItem('contactedPeople')) || [];
    const userDetailsToEdit = existingContactedPeople[index];

    // Update the email ID in the object
    userDetailsToEdit.email = editEmailInput.value;

    // Store the updated array of contacted people in local storage
    localStorage.setItem('contactedPeople', JSON.stringify(existingContactedPeople));

    // Hide the edit form
    editFormContainer.style.display = 'none';

    // Re-render the list of contacted people
    renderContactedPeople();
  }

  // Function to cancel editing and hide the edit form
  function cancelEdit() {
    editFormContainer.style.display = 'none';
  }

  // Add click event listener to the contactedList to handle delete and edit actions
  contactedList.addEventListener('click', function(event) {
    handleDelete(event);
    handleEdit(event);
  });

  // Add submit event listener to the editForm to handle edit form submission
  editForm.addEventListener('submit', handleEditFormSubmit);

  // Add click event listener to the cancelEdit button to handle cancel editing
  const cancelEditBtn = document.getElementById('cancelEdit');
  cancelEditBtn.addEventListener('click', cancelEdit);

  // Initial render of contacted people
  renderContactedPeople();
});

  