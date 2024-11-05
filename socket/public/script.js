const socket = io();

document.getElementById('joinChat').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const room = document.getElementById('room').value.trim();

    if (username && room) {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('chatContainer').classList.remove('hidden');

        socket.emit('joinRoom', { username, room });
    }
});

document.getElementById('sendMessage').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const content = messageInput.value.trim();

    if (content) {
        const room = document.getElementById('room').value;
        const username = document.getElementById('username').value;

        socket.emit('chatMessage', { username, room, content });
        messageInput.value = '';
    }
});

socket.on('message', (message) => {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (message.username === document.getElementById('username').value) {
        messageElement.classList.add('my-message');
    }

    messageElement.innerHTML = `<strong>${message.username}</strong> <small>${message.time}</small><p>${message.content}</p>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});
