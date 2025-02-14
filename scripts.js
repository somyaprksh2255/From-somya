// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Heart animation
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    // Kiss game
    let score = 0;
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');

    function createKiss() {
        const kiss = document.createElement('div');
        kiss.innerHTML = '💋';
        kiss.style.position = 'absolute';
        kiss.style.left = Math.random() * 90 + '%';
        kiss.style.top = Math.random() * 90 + '%';
        kiss.style.fontSize = '30px';
        kiss.style.cursor = 'pointer';
        
        kiss.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
            kiss.remove();
            if(score % 10 === 0) {
                confetti();
            }
        });

        gameArea.appendChild(kiss);
    }

    setInterval(createKiss, 1500);

    // Secret message
    const messages = [
        "I cherish every moment with you",
        "You make my heart skip a beat ❤️",
        "I love you more than words can say",
        "Your my 11:11 wish comes true",
        "You looks just like a dream, The prettiest girl I've ever seen, From the cover of a magazine",
        "My love will always stay by you, I'll keep it safe, so don't you worry a thing, I'll tell you I love you more. It's stuck with you forever, so promise you won't let it go. I'll trust the universe will always bring me to you",
        "Cause I'm falling slowly in love with you",
        "Maybe I just wanna be yours, I wanna be yours, I wanna be yours",
        "You're a, you're a lady, and I am just a boy",
        "If the world was ending, I'd wanna be next to you",
        "I'll never forget the day you make me feel that delusion butterflies exists",
        "The girl with the prettiest eyes, And a voice as sweet as wine. I'm your's miss iMine",
        
    ];

    const revealBtn = document.getElementById('revealBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');

    revealBtn.addEventListener('click', () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        hiddenMessage.textContent = randomMessage;
        hiddenMessage.style.display = 'block';
        hiddenMessage.classList.add('fade-in');
    });
});