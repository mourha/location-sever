// const nodemon = require("nodemon")

const submitNameButton = document.getElementById('submit-name-btn')
const mn = document.getElementById('mn')
const cen = document.querySelector(".cen")
const nameInput = document.getElementById('name')

submitNameButton.addEventListener('click', () => {
  userName = nameInput.value
  if (userName) {
    cen.classList.add('hide') // Hide name input form
    mn.classList.remove('hide') // Show start button after name is entered
    console.log("hhhhhhhhh")

    // function bb (){
      if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(async (position) => {
            // doSomething(position.coords.latitude, position.coords.longitude);
            const lat = position.coords.latitude
            const lot = position.coords.longitude
            // const named  = document.getElementById('name')
            // userName:named
            document.getElementById("latitude").textContent  = lat
            document.getElementById("longitude").textContent  = lot
            // document.getElementById('name').value
            // named = named.value
            // named = "mohaa"
            console.log("geolocation IS  available");
    
            // post req
            const data = { lat ,lot , userName}; 
            const option = {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            const response  = await fetch("/api", option);
            const json = await response.json();
            console.log(json)
          });
          /// end
          console.log(response)
          
      } else {
        /* geolocation IS NOT available */
        console.log("geolocation IS NOT available")
      }
  } else {
    alert("Please enter your name to start the quiz!") // Alert if no name is entered
  }
})


  // console.log(userName)

  // }


//   t=y 







// if ("geolocation" in navigator) {
//   /* geolocation is available */
//   navigator.geolocation.getCurrentPosition((position) => {
//       // doSomething(position.coords.latitude, position.coords.longitude);
//       const lat = position.coords.latitude
//       const lot = position.coords.longitude
//       document.getElementById("latitude").textContent  = lat
//       document.getElementById("longitude").textContent  = lot
//       console.log("geolocation IS  available")
//     });
    
// } else {
//   /* geolocation IS NOT available */
//   console.log("geolocation IS NOT available")
// }