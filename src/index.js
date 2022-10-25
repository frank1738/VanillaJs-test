/* eslint-disable Missing trailing comma, Unexpected use of 'location'  */
const usersLink = 'https://jsonplaceholder.typicode.com/users';
const usersContainer = document.querySelector('.users-list');
const postsContainer = document.querySelector('.user-posts');
const posts = document.querySelector('.posts');
const users = document.querySelector('.users');
const button = document.querySelector('.btn');

posts.classList.add('hide');
button.addEventListener('click', () => {
  location.reload();
});

// Fetch selected user's posts

const fetchPosts = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const posts = await response.json();

    for (let i = 0; i < posts.length; i += 1) {
      const post = document.createElement('li');
      post.classList.add('single-post');
      post.innerHTML = ` <h3 class="post">${posts[i].title}</h3>
                         <p>${posts[i].body}</p>`;
      postsContainer.appendChild(post);
    }
  } catch (e) {
    alert('an error occured');
  }
};

// Helper function
const selectUser = (e) => {
  users.classList.add('hide');
  posts.classList.remove('hide');
  const id = e.target.id;
  fetchPosts(id);
};

// Fetch all users

const fetchUsers = async () => {
  try {
    const response = await fetch(usersLink);
    const users = await response.json();
    for (let i = 0; i < users.length; i += 1) {
      const user = document.createElement('li');
      user.classList.add('single-user');
      user.setAttribute('id', users[i].id);
      user.innerHTML = ` <p id=${users[i].id}><b>Name:</b>  ${users[i].name}</p>`;
      usersContainer.appendChild(user);
    }
  } catch (e) {
    alert('an error occured');
  }
  const usersList = document.querySelectorAll('.single-user');
  usersList.forEach((item) => {
    item.addEventListener('click', selectUser);
  });
};

// All user data is fetched when the page is loaded
window.addEventListener('load', fetchUsers);
