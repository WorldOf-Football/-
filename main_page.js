window.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profile-btn');
    const helloText = document.getElementById('hello-text');

    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            const name = prompt('What is your name?');
            if (name && name.trim() !== '') {
                helloText.textContent = `Hello, ${name.trim()}!`;
            }
        });
    }
});
