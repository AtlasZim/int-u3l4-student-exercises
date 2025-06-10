// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.
contentButton.addEventListener("click", function(){
    myName.innerHTML="Atlas";
});
// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
    myHobby.innerHTML="I like to play cello"
    myLocation.innerHTML= "I live in Indianapolis"






});

// 3. Add an event listener to the `image1Button`
image1Button.addEventListener("mouseover", function(){
    image.src="download.jpg"
});
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("mouseover", function(){
    image.src="mountain.jpg"
});// BONUS
// 7. Try using different event types for your buttons.
