<<<<<<< HEAD
// // var locationbtn=document.querySelector(".search-image")
// // var chennaiblog=document.getElementById("chennaiBlog")

// // function searches(){

// //     var location=locationbtn.value()
// //     console.log(location)

// //     if(location=="chennai"){
// //         chennaiblog.style.display='block'
// //     }
// //     else{
// //         chennaiblog.style.display="none"
// //     }

// // }
// var locationbtn = document.querySelector(".search-image");
// var chennaiblog = document.getElementById("chennaiBlog");

// function search() {
//     // Use value property instead of value()

//     var location = locationbtn.value;
//     console.log(location);

//     if (location === "chennai") {
//         chennaiblog.style.display = 'block';
//     } else {
//         chennaiblog.style.display = "none";
//     }
// }

// // Example of attaching the function to an event (for a button click)
// locationbtn.addEventListener("input", search);


    var locationbtn = document.querySelector(".locationbutton");
    var chennaiblog = document.getElementById("chennaiBlog");

    function searches() {
        var location = locationbtn.value;
        console.log(location);

        if (location.toLowerCase() === "chennai") {
            chennaiblog.style.display = 'block';
        } else {
            chennaiblog.style.display = "none";
        }
    }

    // var locationImage = document.querySelector(".location-image");
    // locationImage.addEventListener("click", searches);

=======
// // var locationbtn=document.querySelector(".search-image")
// // var chennaiblog=document.getElementById("chennaiBlog")

// // function searches(){

// //     var location=locationbtn.value()
// //     console.log(location)

// //     if(location=="chennai"){
// //         chennaiblog.style.display='block'
// //     }
// //     else{
// //         chennaiblog.style.display="none"
// //     }

// // }
// var locationbtn = document.querySelector(".search-image");
// var chennaiblog = document.getElementById("chennaiBlog");

// function search() {
//     // Use value property instead of value()

//     var location = locationbtn.value;
//     console.log(location);

//     if (location === "chennai") {
//         chennaiblog.style.display = 'block';
//     } else {
//         chennaiblog.style.display = "none";
//     }
// }

// // Example of attaching the function to an event (for a button click)
// locationbtn.addEventListener("input", search);


    var locationbtn = document.querySelector(".locationbutton");
    var chennaiblog = document.getElementById("chennaiBlog");

    function searches() {
        var location = locationbtn.value;
        console.log(location);

        if (location.toLowerCase() === "chennai") {
            chennaiblog.style.display = 'block';
        } else {
            chennaiblog.style.display = "none";
        }
    }

    // var locationImage = document.querySelector(".location-image");
    // locationImage.addEventListener("click", searches);

>>>>>>> 66814cb (Your commit message)
