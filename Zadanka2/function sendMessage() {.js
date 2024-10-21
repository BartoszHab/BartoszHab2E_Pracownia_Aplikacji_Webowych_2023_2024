function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value;

    if (messageText.trim() === "") return;

    const chatBlock = document.querySelector('.chat-block');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'jolanta');

    const img = document.createElement('img');
    img.src = 'Jolka.jpg';
    img.alt = 'Jolanta Nowak';

    const paragraph = document.createElement('p');
    paragraph.textContent = messageText;

    messageDiv.appendChild(img);
    messageDiv.appendChild(paragraph);
    chatBlock.appendChild(messageDiv);

    messageInput.value = '';
    chatBlock.scrollTop = chatBlock.scrollHeight; // Scroll to bottom
}

function generateRandomResponse() {
    const responses = [
        "To świetny pomysł!",
        "Nie jestem pewien, ale może spróbuj?",
        "Zgadzam się z tobą!",
        "Ciekawe, co o tym myślą inni.",
        "To brzmi interesująco!"
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const chatBlock = document.querySelector('.chat-block');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'krzysztof');

    const img = document.createElement('img');
    img.src = 'Krzysiek.jpg';
    img.alt = 'Krzysztof Łukasiński';

    const paragraph = document.createElement('p');
    paragraph.textContent = randomResponse;

    messageDiv.appendChild(img);
    messageDiv.appendChild(paragraph);
    chatBlock.appendChild(messageDiv);
    
    chatBlock.scrollTop = chatBlock.scrollHeight; // Scroll to bottom
}
