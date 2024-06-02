document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyToClipboard);

function generatePassword() {
    const length = 8;

    // Lista de emojis como caracteres reales
    const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '☺️', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🥴', '😇', '🤠', '🥳', '🥸', '😎', '🤓', '🧐', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👵', '🧓', '👴', '👲', '👳‍♀️', '👳‍♂️', '🧕', '👮‍♀️', '👮‍♂️', '👷‍♀️', '👷‍♂️', '💂‍♀️', '💂‍♂️', '🕵️‍♀️', '🕵️‍♂️', '👩‍⚕️', '👨‍⚕️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎓', '👨‍🎓', '👩‍🎤', '👨‍🎤', '👩‍🏫', '👨‍🏫', '👩‍🏭', '👨‍🏭', '👩‍💻', '👨‍💻', '👩‍💼', '👨‍💼', '👩‍🔧', '👨‍🔧', '👩‍🔬', '👨‍🔬', '👩‍🎨', '👨‍🎨', '👩‍🚒', '👨‍🚒', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍⚖️', '👨‍⚖️', '🤶', '🎅', '🧙‍♀️', '🧙‍♂️', '🧝‍♀️', '🧝‍♂️', '🧛‍♀️', '🧛‍♂️', '🧟‍♀️', '🧟‍♂️', '🧞‍♀️', '🧞‍♂️', '🧜‍♀️', '🧜‍♂️', '🧚‍♀️', '🧚‍♂️', '👼', '🤰', '🤱', '👩‍🍼', '👨‍🍼'];

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        password += emojis[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');

    // Crear un elemento de texto temporal
    const tempInput = document.createElement('textarea');
    tempInput.value = passwordField.value;
    document.body.appendChild(tempInput);

    // Seleccionar el contenido del elemento temporal
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    // Copiar el contenido seleccionado
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Contraseña copiada al portapapeles');
}

// Function to replace 'o' characters in the title with random emojis intermittently
function animateTitle() {
    const title = document.getElementById('passwordTitle');
    const titleText = title.textContent;
    const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😍', '😘', '😗', '😙', '😚', '☺️', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '😎', '🤓', '🧐', '😈', '👿', '👹', '👺', '💀'];

    // Create a timer with a random interval between 100ms and 500ms
    const timer = setInterval(() => {
        const replacedText = titleText.replace(/o/gi, () => {
            // Randomly choose between 'o' and a random emoji
            if (Math.random() < 0.5) {
                return 'o';
            } else {
                return emojis[Math.floor(Math.random() * emojis.length)];
            }
        });
        title.textContent = replacedText;
    }, Math.floor(Math.random() * 400) + 100); // Random interval between 100ms and 500ms

    // Function to restart the animation after 2 seconds
    function restartAnimation() {
        clearInterval(timer); // Clear the previous timer
        animateTitle(); // Restart the animation
    }

    // Restart the animation after a random interval between 1 and 3 seconds
    setTimeout(restartAnimation, Math.floor(Math.random() * 2000) + 1000); // Random interval between 1000ms and 3000ms
}

// Call the function to animate the title when the page loads
animateTitle();
