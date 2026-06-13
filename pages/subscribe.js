document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-section form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // here i add a loading animation using sweetalert2
    Swal.fire({
      title: "Sending Message...",
      text: "Please wait 🚀",
      allowOutsideClick: false,
      showConfirmButton: false,

      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Collect form data
    const fullName = form.querySelector('input[placeholder="Full Name"]').value;
    const email = form.querySelector(
      'input[placeholder="Email Address"]',
    ).value;
    const phone = form.querySelector('input[placeholder="Phone Number"]').value;
    const subject = form.querySelector(
      'input[placeholder="Email Subject"]',
    ).value;
    const message = form.querySelector('textarea[name="message"]').value;

    emailjs.init("1mz4Z2n1ih_L8X3A5");

    // 1) Send to Admin
    emailjs
      .send("service_6503ihk", "template_v2cgkhn", {
        full_name: fullName,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      })
      .then(function () {
        console.log("Admin email sent ✅");
        // 2) Send confirmation to User
        return emailjs.send("service_6503ihk", "template_nf6xsaf", {
          full_name: fullName,
          email: email,
          message: message,
        });
      })
      .then(function () {
        //  alert("✅ Message sent successfully!");
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully!",
          html: `
    <p style="font-size:15px">
      Thanks for contacting me 💜<br><br>
      Please check your email inbox 📩
    </p>
  `,
          confirmButtonText: "Awesome 🚀",
          timer: 5000,
          timerProgressBar: true,
        });
        form.reset();
      })
      .catch(function (error) {
        //  alert("❌ Failed to send: " + JSON.stringify(error));
        Swal.fire({
          icon: "error",
          title: "Failed to Send",
          text: "Something went wrong. Please try again later!",
        });
      });
  });
});


// const form = document.getElementById("contactForm");

// form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const formData = new FormData(form);

//     // Loading animation
//     Swal.fire({
//         title: 'Sending Message...',
//         text: 'Please wait a moment 🚀',
//         allowOutsideClick: false,
//         showConfirmButton: false,
//         didOpen: () => {
//             Swal.showLoading();
//         }
//     });

//     try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const result = await response.json();

//         if (result.success) {

//             Swal.fire({
//                 icon: 'success',
//                 title: 'Message Sent Successfully!',
//                 html: `
//                     <p style="font-size:15px">
//                         Thanks for contacting me 💜<br><br>
//                         Please check your email inbox 📩
//                     </p>
//                 `,
//                 confirmButtonText: 'Awesome!',
//                 timer: 5000,
//                 timerProgressBar: true
//             });

//             form.reset();

//         } else {

//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Something went wrong!'
//             });

//         }

//     } catch (error) {

//         Swal.fire({
//             icon: 'error',
//             title: 'Network Error',
//             text: 'Please try again later!'
//         });

//     }
// });
