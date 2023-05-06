// looking in entire doc querying for all html button thn eventlistner for checking the click and if it does 
// click function look in entire doc for query of h1 and make it red using for loop to traverse through all button


for (i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "red";
    })
}