// script.js
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function setCaptcha() {
    document.getElementById('captcha').textContent = generateCaptcha();
}

document.getElementById('refresh-btn').addEventListener('click', setCaptcha);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        setCaptcha();
    }
});

// Initial captcha set
setCaptcha();
