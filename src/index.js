const usersLink = 'https://jsonplaceholder.typicode.com/users';
const userPosts = 'https://jsonplaceholder.typicode.com';
const usersContainer = document.querySelector('.users-list');

const fetchUsers = async (e) => {
  try {
    const response = await fetch(usersLink);
    const users = await response.json();
    console.log(users);
    for (let i = 0; i < users.length; i++) {
      const user = document.createElement('li');
      user.innerHTML = ` <p class="score"><b>Name:</b>  ${users[i].name}</p>`;
      usersContainer.appendChild(user);
      //   usersContainer.push(user);
    }
  } catch (e) {
    alert('an error occured');
  }
};

window.addEventListener('load', fetchUsers);
