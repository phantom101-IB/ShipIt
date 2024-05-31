// // variables
const humburger = document.querySelector(".humburger-menu")
const menuList = document.querySelector(".nav_content")
// const trackBtn = document.querySelector(".track-btn")
// const Form = document.querySelector(".main-form")
// // let baba = document.querySelector(".baba")
let errorMsg = document.querySelector(".error-display")

const users = ["1234567890", "0987654321"]
// isValid = false
// // humberger script
humburger.addEventListener("click", function(){
    menuList.classList.toggle("active")
    
    if (humburger.classList.contains("fa-bars")){
        humburger.classList.replace("fa-bars", "fa-xmark")
    }
    
    else{
        humburger.classList.replace("fa-xmark", "fa-bars")
    }
})



// function shipmentDetails(){
//     let trackNum = document.querySelector(".track-num").value
//     if(trackNum == ""){
//         isValid = false
//         errorMsg.innerHTML = "Please Enter Tracking Number"
//         return
//     }
//     else if(trackNum.length !== 10){
//         isValid = false
//         errorMsg.innerHTML = "Incorrect Tracking Number"
//         console.log(trackNum.length)
//         return
//     }

//     return isValid = true

// }




// Form.addEventListener("submit", (e)=>{
//     if(!shipmentDetails()){
//         e.preventDefault()
//     }

// })


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.main-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Example condition: Check if the input value is not empty
        const inputValue = document.querySelector('.track-num').value;
        if (inputValue == "") {
            // Redirect to the table page with the validated data
            console.log("Pls Enter number")
            errorMsg.innerHTML = "Please Enter a Tracking Number"
        } 
        else if(inputValue == users[0]){
            window.location.href = `/HTMLs/shipment-details.html?inputValue=${encodeURIComponent(inputValue)}`;
        }

        else if(inputValue == users[1]){
            window.location.href = `/HTMLs/shipment-details.html?inputValue=${encodeURIComponent(inputValue)}`;
        }
        
        else {
            console.log('Please enter a valid value.');
            errorMsg.textContent = "Invalid Tracking Number"
        }
    });
});

// mailing

// document.getElementById('emailForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const to = document.getElementById('to').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     // Send data to server
//     fetch('http://localhost:3000/send-email', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ to, subject, text: message }),
//     })
//     .then(response => response.text())
//     .then(data => {
//         console.log(data);
//         alert('Email sent successfully!');
//     })
//     .catch(error => {
//         console.error('Error sending email:', error);
//         alert('Failed to send email. Please try again.');
//     });
// });


