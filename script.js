document.addEventListener('DOMContentLoaded', function() {
    const userDetailsForm = document.getElementById('userDetailsForm');
  
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
  
      // Store the user details object in the local storage
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
      // Clear the form inputs
      userDetailsForm.reset();
  
      alert('User details have been successfully stored in the local storage.');
    });
  });
  
  