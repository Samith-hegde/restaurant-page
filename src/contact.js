function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = 'Contact us at: 123-456-7890';
    return contact;
}

export { createContact };