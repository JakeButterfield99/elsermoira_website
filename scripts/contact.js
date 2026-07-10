$(document).ready(() => {
    emailjs.init('0OewoGFkT4QjW5eTn');
});

$("#contact_form").submit(function (e) {
    e.preventDefault();

    const service = 'service_tg9qume';
    const template = 'template_fb8m3ua';

    emailjs.sendForm(service, template, $('#contact_form')[0])
        .then(function () {
            $("#contact_form").hide();
            $(".contact_confirm").show();
        }, function (error) {
            console.log('FAILED...', error);
        });
});