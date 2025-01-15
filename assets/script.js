$(document).ready(function() {
    $('#send-btn').click(function() {
        const userInput = $('#user-input').val().trim();
        
        // Check if user input is empty
        if (userInput === '') {
            alert("Please enter a message."); // Alert if input is empty
            return; // Exit if input is empty
        }

        displayMessage(userInput, 'user-message'); // Display user's message

        // Display loading message
        displayLoadingMessage();

        // Simulate a delay for loading response
        setTimeout(() => {
            removeLoadingMessage(); // Remove loading message
            const botResponse = getBotResponse(userInput); // Get bot response
            displayMessage(botResponse, 'bot-message'); // Display bot response
        }, 1000); // 1 second delay for loading effect

        // Clear input field
        $('#user-input').val('');
    });

    // Function to display messages in the chat box
    function displayMessage(message, messageType) {
        const messageElement = $('<div></div>') // Create a new div for the message
            .addClass('message ' + messageType) // Add classes for styling
            .text(message); // Set message text
        $('#chat-box').append(messageElement); // Add message to chat box
        $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight); // Auto-scroll to the bottom
    }

    // Function to display loading message
    function displayLoadingMessage() {
        const loadingMessage = $('<div></div>')
            .attr('id', 'loading-message') // Set an ID for the loading message
            .addClass('message bot-message')
            .text("Loading...");
        $('#chat-box').append(loadingMessage);
        $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight); // Scroll to the bottom
    }

    // Function to remove loading message
    function removeLoadingMessage() {
        $('#loading-message').remove(); // Remove loading message from chat box
    }

    // Function to generate bot responses based on user input
    function getBotResponse(input) {
        const responses = {
            "hi": "Hello there!",
            "how are you?": "I'm just a bot, but thanks for asking!",
            "bye": "Goodbye! Have a great day!",
        };

        return responses[input.toLowerCase()] || "I'm sorry, I didn't understand that.";
    }
});