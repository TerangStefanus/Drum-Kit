

var drumLength = document.querySelectorAll(".drum").length;

for( i = 0; i<drumLength; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        animateButton(buttonHTML);
        
    });
}

document.addEventListener("keydown", function(event)
{
    makeSound(event.key);
});


function makeSound(key)
{
    switch (key) 
    {
        case "w":
            var beat = new Audio('sounds/tom-1.mp3');
            beat.play();
            animateButton(key);
            break;
        case "a":
            var beat = new Audio('sounds/tom-2.mp3');
            beat.play();
            animateButton(key);
            break;
        case "s":
            var beat = new Audio('sounds/tom-3.mp3');
            beat.play();
            animateButton(key);
            break;
        case "d":
            var beat = new Audio('sounds/tom-4.mp3');
            beat.play();
            animateButton(key);
            break;
        case "j":
            var beat = new Audio('sounds/crash.mp3');
            beat.play();
            animateButton(key);
            break;
        case "k":
            var beat = new Audio('sounds/kick-bass.mp3');
            beat.play();
            animateButton(key);
            break;
        case "l":
            var beat = new Audio('sounds/snare.mp3');
            beat.play();
            animateButton(key);
            break;

        default:
            break;
    }
}

function animateButton(currentKey)
{
    var click = document.querySelector("." + currentKey);

    click.classList.add("pressed");
    click.style.color = "white";

    setTimeout( function()
    {
        click.classList.remove("pressed");
        click.style.color = " #DA0463";
    }, 100)

}