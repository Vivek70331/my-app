// File: script.js

document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesBox = document.getElementById('messages-box');
    const usernameDisplay = document.getElementById('username-display');

    // Function to add a message to the chat box
    function appendMessage(username, message) {
        // Determine the color class based on the username
        const colorClass = username.toLowerCase() === 'vivek' ? 'vivek-color' : 'ritik-color';

        const newMessage = document.createElement('p');
        newMessage.innerHTML = `<span class="user-name ${colorClass}">${username}</span> : ${message}`;
        
        messagesBox.appendChild(newMessage);

        // Scroll to the bottom to show the newest message
        messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    // Event handler for the Send button
    function sendMessage() {
        const message = messageInput.value.trim();
        const username = usernameDisplay.value; 

        if (message !== '') {
            appendMessage(username, message); 
            
            // Clear the input field
            messageInput.value = '';
        }
    }

    // Attach event listeners
    sendButton.addEventListener('click', sendMessage);

    // Allow sending message with the Enter key
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

});