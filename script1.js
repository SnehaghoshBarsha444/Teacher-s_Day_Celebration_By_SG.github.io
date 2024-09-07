// script1.js
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default form submission
    const username = usernameInput.value.trim();

    if (username === 'Srabani_Mam_2022') {
        window.location.href = 'srabani.html'; // redirect to Srabani's page
    } else if (username === 'English_Mam_2018') {
        window.location.href = 'english.html'; // redirect to English's page
    }else if (username === 'Trina_Mam') {
            window.location.href = 'trina.html'; // redirect to Trina's page
    }else if (username === 'Surya_Sir_2018') {
            window.location.href = 'surya.html'; // redirect to Surya's page
    }else if (username === 'Soumyadeep') {
            window.location.href = 'soumyadeep.html'; // redirect to Trina's page
    } else {
        alert('Invalid username'); // display error message for other usernames
    }
});