// Initialize the Async Function
const fetchUserData = async () => {
    // Define the API URL
    const apiUrl= 'https://jsonplaceholder.typicode.com/users';
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    try {
        const response = await fetch(apiUrl);
        // convert to json and store in users variable
        const users = await response.json();
        //set dataContainer to empty
        dataContainer.innerHTML = '';
        // template list creating elements  
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
           });
           dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }};

    document.addEventListener('DOMContentLoaded', function() {
        fetchUserData();
    }) 
    