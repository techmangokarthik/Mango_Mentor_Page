// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBbJtd7kpde7-EjbNvcGq3LTLrYBj8rC_c",
    authDomain: "contact-form-dcc97.firebaseapp.com",
    projectId: "contact-form-dcc97",
    databaseURL: "https://contact-form-dcc97-default-rtdb.firebaseio.com/",
    storageBucket: "contact-form-dcc97.appspot.com",
    messagingSenderId: "807290986274",
    appId: "1:807290986274:web:3b2710df27579759500f7b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference Contact Information collections
const contactInfo = firebase.database().ref("infos");

//Listens for a submission
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    
    //Get form values here
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let message = document.querySelector(".message").value;
    console.log(name,email,phone,message);

    saveContactInfo(name, email, phone, message);

    document.querySelector(".contact-form").reset();
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
  