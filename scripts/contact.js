$(document).ready(() => {
    emailjs.init('Z7d7Y5OtVWGC1jtZY');
});

$("#contact_form").submit(function (e) {
    e.preventDefault();

    const service = 'service_1txqgcr';
    const template = 'template_mlnanpe';

    emailjs.sendForm(service, template, $('#contact_form')[0])
        .then(function () {
            $("#contact_form").hide();
            $(".contact_confirm").show();
        }, function (error) {
            console.log('FAILED...', error);
        });
});