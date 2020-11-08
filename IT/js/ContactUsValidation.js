const formElem = document.getElementById('contact-us-form');
const nameElem = document.getElementById('name');
const emailElem = document.getElementById('email');
const messageElem = document.getElementById('message');
const errorMessageElem = document.getElementById('errorMessage');

formElem.addEventListener("submit", (e) =>
{
    let messages = [];

    if(nameElem.value.length < 3)
    {
        messages.push('Please enter a valid name');
    }

    if(emailElem.value.indexOf("@") < 1 || emailElem.value.indexOf(".") < 3)
    {
        messages.push('Please enter a valid email address');
    }

    if(messageElem.value.length <= 10)
    {
        messages.push('Your message is required');
    }

    if(messages.length > 0)
    {
        e.preventDefault();
        errorMessageElem.innerText = messages.join('\n');
    }
});