'use strict'

const form = document.querySelector('#user_form');
const bioContainer = document.querySelector('.bio_container');
const container = document.querySelector('.container');
const body = document.querySelector('body');
console.log(container);
// const location1 = document.getElementById('location').textContent;
// const gitAccount = document.getElementById('twitter_account').textContent;
// const twitter = document.getElementById('twitter_account').textContent;
// const company = document.getElementById('company').textContent;



// const renderUser = function (data, className = '') {
//     const html = `
//     <div class="content_container">
//         <span class="biometrics ${className}">repos</span>
//         <h2 class="info" id="repos">${data.repos}</h2>
//     </div>
//     <div class="content_container">
//         <span class="biometrics">followers</span>

//         <h2 class="info">${data.followers}</h2>
//     </div>
//     <div class="content_container">
//         <span class="biometrics">following</span>
//         <h2 class="info">${data.following}</h2>
//     </div>`;
//     bioContainer.insertAdjacentElement('beforeend', html);

// };

let moonIcon = document.querySelector('.moon_icon');
console.log(moonIcon);
moonIcon.addEventListener('click', () => {
    body.classList.toggle('dark');
});


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const search = document.getElementById('input_text').value;
    const userName = search.split(' ').join('');

    const gitUsers = async () => {
        try {
            const res = await fetch("https://api.github.com/users/" + userName);
            if (!res.ok) throw new Error('Problem getting username');

            console.log(res);
            const users = await res.json();
            console.log(users);
            // renderUser(users);
            // return users;
            if (users.bio === null) {
                document.getElementById('bio').textContent = 'The profile has no bio';
            } else {
                document.getElementById('bio').textContent = `${users.bio}`;
            }
            if (users.location === null) {
                document.getElementById('location').textContent = 'Not available';
            } else {
                document.getElementById('location').textContent = `${users.location}`;
            }
            if (users.twitter_username === null) {
                document.getElementById('twitter_account').textContent = 'Not available';
            } else {
                document.getElementById('twitter').textContent = `${users.twitter_username}`;
            }
            if (users.html_url === null) {
                document.getElementById('blog').textContent = 'Not available';
            } else {
                document.getElementById('blog').textContent = `${users.html_url}`;
            }
            if (users.company === null) {
                document.getElementById('company').textContent = 'Not available';
            } else {
                document.getElementById('company').textContent = `${users.company}`;
            }

            // if (users.location & users.html_url & users.twitter_username & users.company === null) {
            //     location = twitter = gitAccount = company = 'Not Available'
            // } else {
            //     location = `${users.location}`;
            //     twitter = `${users.twitter_username}`;
            //     gitAccount = `${users.html_url}`;
            //     company = `${users.company}`;
            // };

            document.getElementById('repos').textContent = `${users.public_repos} `;
            document.getElementById('followers').textContent = `${users.followers} `;
            document.getElementById('following').textContent = `${users.following} `;
            // document.getElementById('location').textContent = `${users.location} `;
            // document.getElementById('twitter_account').textContent = `${users.twitter_username} `;
            // document.getElementById('blog').textContent = `${users.html_url} `;
            // document.getElementById('company').textContent = `${users.company} `;


        } catch (err) {
            console.error(err.message);
        }

    }
    gitUsers();


});

