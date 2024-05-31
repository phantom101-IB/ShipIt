// function newTd(){
//     let tBody = document.querySelector(".t-body")
// }


// newTd()
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector(".main-form")
//     const TrackNum = document.querySelector(".track-num")
//     // const TrackBtn = document.querySelector(".track-btn")
//     const tBody = document.querySelector(".t-body")



//     // TrackBtn.addEventListener("click", ()=>{
//     //     if(TrackNum.value == "1234567890"){
//     //         addC()
            
//     //        console.log("Phantom")
//     //     }

//     //     else{
//     //         console.log()
//     //     }
//     // })

//     form.addEventListener("submit", function(e){
//         // e.preventDefault()
//         if(TrackNum.value === "1234567890"){
//             addC()
//         }
//         else{
//             console.log("Phantom")
//         }
//         console.log("Phantom")
//     })

//     function addC(){
//         const newRow = document.createElement('tr');
//         // Add cells to the row, adjust as needed
//         newRow.innerHTML = '<td>New Data 1</td><td>New Data 2</td>';
//         tBody.appendChild(newRow);

//         // Clear the input value after successful submission
//         inputValue.value = "";
//     }

// });


document.addEventListener('DOMContentLoaded', function() {
    // const tBody = document.querySelector('.t-body');

    const usersData = ["1234567890", "0987654321"]

    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const inputValue = urlParams.get('inputValue');

    if (inputValue == usersData[0]) {
        // If the input value exists, add a new table row
        addTableRow();
    }

    else if(inputValue == usersData[1]){
        addTableRow1()
    }

    function addTableRow() {
        const tBody = document.querySelector('.t-body');
        // user details var
        const TrackingNumber = document.getElementById("tracking-num")
        const packageId = document.getElementById("package-id")
        const origin = document.getElementById("origin")
        const Destination = document.getElementById("destination")
        const ShipDate = document.getElementById("ship-date")
        const ArrDate = document.getElementById("rec-date")
        const weight = document.getElementById("iweight")
        const quantity = document.getElementById("iquantity")

        // User innerHTMLs
        TrackingNumber.innerHTML = "1234567890"
        packageId.innerHTML = "0231223458"
        origin.innerHTML = "Mohammed Phantom <br> Ghana, Tamale"
        Destination.innerHTML = "Tomas Miller <br> USA, Florida"
        ShipDate.innerHTML = "12th Jan, 2024"
        ArrDate.innerHTML = "13th Feb, 2025"
        weight.innerHTML = "123 lbs/ 23 kg"
        quantity.innerHTML = "43"

        // const newRow = document.createElement('tr');
        // Add cells to the row, adjust as needed
        tBody.insertAdjacentHTML("beforeend", `
            <tr>
                <td>Nov 23, 2023 12:30 PM</td>
                <td>In Transit</td>
                <td>Ghana, ACC</td>
                <td>Courrier Pickup</td>
            </tr>
            <tr>
                <td>Nov 23, 2023 12:30 PM</td>
                <td>In Transit</td>
                <td>Ghana, ACC</td>
                <td>Courrier Pickup</td>
            </tr>
        `)
        // newRow.innerHTML = `<td>${value}</td><td>New Data</td>`;
        // tBody.appendChild(newRow);
    }

    function addTableRow1() {
        const tBody = document.querySelector('.t-body');
        // user details var
        const TrackingNumber = document.getElementById("tracking-num")
        const packageId = document.getElementById("package-id")
        const origin = document.getElementById("origin")
        const Destination = document.getElementById("destination")
        const ShipDate = document.getElementById("ship-date")
        const ArrDate = document.getElementById("rec-date")
        const weight = document.getElementById("iweight")
        const quantity = document.getElementById("iquantity")

        // User innerHTMLs
        TrackingNumber.innerHTML = "1234567890"
        packageId.innerHTML = "0231223458"
        origin.innerHTML = "Deishini <br> Togo, Tamale"
        Destination.innerHTML = "Tomas Miller <br> USA, Florida"
        ShipDate.innerHTML = "12th Jan, 2024"
        ArrDate.innerHTML = "13th Feb, 2025"
        weight.innerHTML = "123 lbs/ 23 kg"
        quantity.innerHTML = "34"

        // const newRow = document.createElement('tr');
        // Add cells to the row, adjust as needed
        tBody.insertAdjacentHTML("beforeend", `
            <tr>
                <td>Nov 23, 2023 12:30 PM</td>
                <td>In Transit</td>
                <td>Ghana, ACC</td>
                <td>Courrier Pickup</td>
            </tr>
            <tr>
                <td>Nov 23, 2023 12:30 PM</td>
                <td>In Transit</td>
                <td>Ghana, ACC</td>
                <td>Courrier Pickup</td>
            </tr>
        `)
        // newRow.innerHTML = `<td>${value}</td><td>New Data</td>`;
        // tBody.appendChild(newRow);
    }

    

   
});