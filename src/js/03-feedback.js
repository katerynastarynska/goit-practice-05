import throttle from 'lodash.throttle';

const FEEDBACK_DATA = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onSubmitForm);

let formFeedbackData = {};

function onFormInput(e) {

    formFeedbackData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_DATA, JSON.stringify(formFeedbackData));
}

populateData();

function populateData() {
    const parsedData = JSON.parse(localStorage.getItem(FEEDBACK_DATA));

    if (parsedData.email && parsedData.email.length > 0 && parsedData.email !== undefined) {
        emailEl.value = parsedData.email;
        formFeedbackData.email = parsedData.email;

    }
    if (parsedData.message && parsedData.message.length > 0 && parsedData.message !== undefined) {
        messageEl.value = parsedData.message;
        formFeedbackData.message = parsedData.message;
    }
    console.log(formFeedbackData);
}

function onSubmitForm(e) {
    e.preventDefault()
    console.log("sending form");
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_DATA);
    formFeedbackData = {};
}