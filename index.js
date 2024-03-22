const username = document.getElementById("username");
const password = document.getElementById("password");
const send = document.getElementById("send");


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("pressed submit");

        const usernameValue = username.value;
        const passwordValue = password.value;

        const data = {
            username: usernameValue,
            password: passwordValue
        };

        console.log(data);

        fetch('https://csa-ngt3.onrender.com/admin/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Data sent successfully", data);
        })
        .catch(error => {
            console.error("There was a problem with your fetch operation: ", error);
        });
    });
});
