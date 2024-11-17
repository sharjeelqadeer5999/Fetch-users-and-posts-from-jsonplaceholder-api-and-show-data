async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();      
      const userList = document.getElementById('user-list');
      data.forEach(user => {
        const userListItem = document.createElement('li');
        userListItem.innerHTML = `
          <h2>${user.name}</h2>
          <p>Username: ${user.username}</p>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Website: ${user.website}</p>
          <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
          <p>Company: ${user.company.name}</p>
        `;
        userList.appendChild(userListItem);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  getUsers();