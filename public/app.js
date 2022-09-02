// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAyPWWYi6JmZPJ4Ojhzn82na0xdaPEm0g",
    authDomain: "mango-mentors-landing-page.firebaseapp.com",
    projectId: "mango-mentors-landing-page",
    storageBucket: "mango-mentors-landing-page.appspot.com",
    databaseURL: "https://mango-mentors-landing-page-default-rtdb.firebaseio.com/",
    messagingSenderId: "886916120017",
    appId: "1:886916120017:web:6594b1d44789926ef874f0",
    measurementId: "G-SZ37JR338Y"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

//Reference Contact Information collections
const contactInfo = firebase.database().ref('contact-info');



//Listens for a submission
document.querySelector(".contact-form").addEventListener("submit",submitForm);


// let name = document.querySelector(".name").value;
// let email = document.querySelector(".email").value;
// let phone = document.querySelector(".phone").value;
// let message = document.querySelector(".message").value;

function submitForm(e){
    e.preventDefault();
    
    //Get form values here
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const phone = document.querySelector(".phone").value;
    const message = document.querySelector(".message").value;
    console.log(name,email,phone,message);
    saveContactInfo(name, email, phone, message);

    database.collection('contact-form').doc().set({
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }).then(() => {
      document.querySelector(".contact-form").reset();
    })
}


function saveContactInfo(name, email, phone, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  }

  
// For Contacting us
document.getElementById('contact-button').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});

document.querySelector('.submit').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});

//
const applicationInfo = firebase.database().ref('application-info');

// For applying as a mentor or mentee
function submitAppForm(e){
  e.preventDefault();
  
  //Get form values here
  const app_name = document.querySelector(".app_name").value;
  const app_email = document.querySelector(".app_email").value;
  const app_phone = document.querySelector(".app_phone").value;
  const app_message = document.querySelector(".app_message").value;
  console.log(app_name,app_email,app_phone,app_message);
  saveApplicationInfo(app_name, app_email, app_phone, app_message);

  database.collection('application-form').doc().set({
    app_name: app_name.value,
    app_email: app_email.value,
    app_phone: app_phone.value,
    app_message: app_message.value,
  }).then(() => {
    document.querySelector(".application-form").reset();
  })
}

function saveApplicationInfo(app_name, app_email, app_phone, app_message) {
  let newApplicationInfo = applicationInfo.push();

  newApplicationInfo.set({
    app_name: app_name,
    app_email: app_email,
    app_phone: app_phone,
    app_message: app_message,
  });
}

//For more information
document.getElementById('apply-button').addEventListener('click', function(){
document.querySelector('.apply-modal').style.display = 'flex';
});

document.querySelector('.apply-close').addEventListener("click", function() {
  document.querySelector('.apply-modal').style.display = "none";
});

document.querySelector('.apply-submit').addEventListener("click", function() {
  document.querySelector('.apply-modal').style.display = "none";
});
//For more information