// document.addEventListener('DOMContentLoaded', function() {
//     const userDetailsForm = document.getElementById('userDetailsForm');
  
//     userDetailsForm.addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       const nameInput = document.getElementById('name').value;
//       const emailInput = document.getElementById('email').value;
//       const ageInput = document.getElementById('age').value;
//   JSON
//       // Create an object to store the user details
//       const userDetails = {
//         name: nameInput,
//         email: emailInput,
//         age: ageInput,
//       };
  
//       // Store the user details object in the local storage
//       localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
//       // Clear the form inputs
//       userDetailsForm.reset();
  
//       alert('User details have been successfully stored in the local storage.');
//     });
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     const userDetailsForm = document.getElementById('userDetailsForm');
  
//     userDetailsForm.addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       const nameInput = document.getElementById('name').value;
//       const emailInput = document.getElementById('email').value;
//       const ageInput = document.getElementById('age').value;
  
//       // Create an object to store the user details
//       const userDetails = {
//         name: nameInput,
//         email: emailInput,
//         age: ageInput,
//       };
  
//       // Get existing user details from LocalStorage
//       let existingUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
  
//       // Add the new user details to the existing array
//       existingUsers.push(userDetails);
  
//       // Store the updated array of user details in the local storage
//       localStorage.setItem('userDetails', JSON.stringify(existingUsers));
  
//       // Clear the form inputs
//       userDetailsForm.reset();
  
//       alert('User details have been successfully stored in the local storage.');
//     });
//   });
  
document.addEventListener('DOMContentLoaded', function() {
    const userDetailsForm = document.getElementById('userDetailsForm');
    const contactedList = document.getElementById('contactedList');
  
    // Function to render the list of contacted people from local storage
    function renderContactedPeople() {
      contactedList.innerHTML = ''; // Clear the list before re-rendering
  
      // Get existing contacted people from LocalStorage
      const existingContactedPeople = JSON.parse(localStorage.getItem('contactedPeople')) || [];
  
      existingContactedPeople.forEach(function(userDetails, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${userDetails.name}</strong> (Email: ${userDetails.email}, Age: ${userDetails.age})
          <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        contactedList.appendChild(listItem);
      });
    }
  
    userDetailsForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameInput = document
  
  