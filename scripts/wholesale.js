$(document).ready(() => {
    emailjs.init('0OewoGFkT4QjW5eTn');
});

$("#wholesale_form").submit(function (e) {
    e.preventDefault();

    const service = 'service_tg9qume';
    const template = 'template_3rxv5a9';

    emailjs.sendForm(service, template, $('#wholesale_form')[0])
        .then(function () {
            $("#wholesale_form").hide();
            $(".wholesale_confirm").show();
        }, function (error) {
            console.log('FAILED...', error);
        });
});