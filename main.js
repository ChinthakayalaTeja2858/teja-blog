```javascript
console.log("Teja's Blog website loaded successfully!");

const readButtons = document.querySelectorAll(".read-more");

readButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Full blog page will be added soon!");

    });

});
```
