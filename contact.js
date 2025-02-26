// Open the contact modal
const contactButton = document.getElementById('contact-button');
const contactModal = document.getElementById('contact-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeButton = document.getElementById('close-button');
const sendButton = document.getElementById('send-button');

contactButton.addEventListener('click', () => {
    contactModal.style.display = 'block';
    modalOverlay.style.display = 'block';
});

// Close the modal
closeButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

// Close modal when clicking outside of it
modalOverlay.addEventListener('click', () => {
    contactModal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

// Handle sending the message per mailto-Link
sendButton.addEventListener('click', () => {
    const message = contactModal.querySelector('textarea').value;
    if (message.trim() !== '') {
        // Erstelle den mailto-Link mit Empfänger, Betreff und Body
        window.location.href = 'mailto:stevenkemendics@gmail.com'
            + '?subject=' + encodeURIComponent('Nachricht von der Webseite')
            + '&body=' + encodeURIComponent(message);
        contactModal.querySelector('textarea').value = '';
        contactModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    } else {
        alert('Bitte geben Sie eine Nachricht ein, bevor Sie senden.');
    }
});

