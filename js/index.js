document.getElementById("year").textContent = new Date().getFullYear();

// Track Downloads
function trackDownload(os) {
    gtag('event', 'download', {
      'event_category': 'download',
      'event_label': os
    });
  }
  
  // Contact Form Submission
  // document.getElementById('contact-form').addEventListener('submit', function (e) {
  //   e.preventDefault();
  //   console.log("conatct form submited");
  //   document.getElementById('contact-form').style.display = 'none';
  //   document.getElementById('message-sent').style.display = 'block';
  // });