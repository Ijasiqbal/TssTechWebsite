document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("black", window.scrollY > 250);
});
window.addEventListener("scroll", function() {
  var backBtn = document.querySelector(".backBtn");
  backBtn.classList.toggle("none", window.scrollY < 550);
});
window.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar9");
  var liElements = navbar.querySelectorAll('li');
  var barsIcon = document.querySelector('.fa-bars');

  liElements.forEach(function(li) {
    li.addEventListener("click", function() {
      barsIcon.click();
      window.dispatchEvent(new Event('autoclose'));
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#myForm');

  form.addEventListener('submit', function(event) {

    const formData = new FormData(form);
    const url = 'http://127.0.0.1:8000/api/contacts/'; // Replace 'YOUR_API_ENDPOINT_HERE' with your actual API endpoint

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      
    })
    .catch(error => {
      console.error('Error:', error);
      // Optionally, you can show an error message to the user
    });
  });
});

document.querySelector('.contentContact').addEventListener('click', function() {
  document.getElementById('contactForm').classList.toggle('none');
  document.getElementById('contactForm').classList.toggle('show');
  
});

