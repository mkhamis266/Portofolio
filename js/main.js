const contactForm = document.querySelector('#contact-form');
const senderName = document.querySelector('#name');
const from = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let bodyMessage = `
    Full Name: ${senderName.value} <br />
    ${message.value}
    `;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Port: '2525',
    Username: 'mahmkhamis153@gmail.com',
    Password: '9DDB7A1361A8E7DCA8934C956ED37AB58718',
    To: 'ghosthooda@gmail.com',
    From: from.value,
    Subject: subject.value,
    Body: bodyMessage,
  })
    .then((message) => {
      Swal.fire({
        title: 'Thanks',
        text: 'Your message was sent',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      contactForm.reset();
    })
    .catch((err) => {
      Swal.fire({
        title: 'Sorry!',
        text: "Can't send your message right know",
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    });
});
