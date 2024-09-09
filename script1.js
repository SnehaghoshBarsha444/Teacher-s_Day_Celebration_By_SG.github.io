// script1.js
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default form submission
    const username = usernameInput.value.trim();

    if (username === 'Srabani_Mam_2022') {
        window.location.href = 'srabani.html'; // redirect to Srabani's page
    } else if (username === 'English_Mam_2018') {
        window.location.href = 'english1.html'; // redirect to English's page
    }else if (username === 'Trina_Mam') {
            window.location.href = 'trina.html'; // redirect to Trina's page
    }else if (username === 'Surya_Sir_2018') {
            window.location.href = 'surya.html'; // redirect to Surya's page
    }else if (username === 'Soumyadeep') {
            window.location.href = 'soumyadeep.html'; // redirect to Ron's page
    }else if (username === 'Indranil_Sir_YCH') {
        window.location.href = 'indranil.html'; // redirect to Indranil's page
    } else if (username === 'Soudip_Sir_YCH') {
        window.location.href = 'soudip.html'; // redirect to Soudip's page
    } else if (username === 'Anamika_Mam_2022') {
        window.location.href = 'anamika.html'; // redirect to Anamika's page
    } else if (username === 'Soma_Di_2016') {
        window.location.href = 'soma.html'; // redirect to Soma's page
    } else if (username === 'Aparna_Di_2016') {
        window.location.href = 'aparna.html'; // redirect to Aparna's page
    } else if (username === 'Debarati_Di_2016') {
        window.location.href = 'debarati.html'; // redirect to DRC's page
    } else if (username === 'Ishita_Di_2017') {
        window.location.href = 'ishita.html'; // redirect to IG's page
    } else if (username === 'Arpita_Di_2016') {
        window.location.href = 'arpita.html'; // redirect to Arpita's page
    } else if (username === 'Rabin_Sir') {
        window.location.href = 'rabin.html'; // redirect to Rabin's page
    } else if (username === 'Ishu_Bestie') {
        window.location.href = 'ishu.html'; // redirect to IJ's page
    } else if (username === 'Riya_SML&CF') {
        window.location.href = 'rio.html'; // redirect to Rio's page
    } else if (username === 'Swarup_Ghosh(Kakai_DON)') {
        window.location.href = 'chottu.html'; // redirect to Chottu Kakai's page
    }else if (username === 'H.O.D_Mam') {
        window.location.href = 'hod.html'; // redirect to HOD's page
    }else if (username === 'Amit_Sir') {
        window.location.href = 'amit.html'; // redirect to Amit's page
    }else if (username === 'Rubi_Di_2016') {
        window.location.href = 'rubi.html'; // redirect to Rubi's page
    }else if (username === 'Anindita_Di_2016') {
        window.location.href = 'anindita.html'; // redirect to ASS's page
    }else if (username === 'Bula_Di_2016') {
        window.location.href = 'bula.html'; // redirect to Bula's page
    }else if (username === 'Gita_Di_2018') {
        window.location.href = 'gita.html'; // redirect to GD's page
    }else if (username === 'Nandita_Di_2019') {
        window.location.href = 'nandita.html'; // redirect to NP's page
    }else if (username === 'Nila_Di_2017') {
        window.location.href = 'nila.html'; // redirect to Nila's page
    }else if (username === 'Rupa_Di_2016') {
        window.location.href = 'rupa.html'; // redirect to RM's page
    } else {
        alert('Invalid username'); // display error message for other usernames
    }
});
