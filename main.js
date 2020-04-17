const quotes = [
    "We don't make mistakes, just happy little accidents.",
    "Talent is a pursued interest. Anything that you're willing to practice, you can do.",
    "I can't think of anything more rewarding than being able to express yourself to others through painting. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.",
    "The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe.",
    "All you need to paint is a few tools, a little instruction, and a vision in your mind.",
    "You have unlimited power on this canvas - can literally, literally move mountains.",
    "This is your world. You're the creator. Find freedom on this canvas. Believe that you can do it, 'cuz you can do it. You can do it.",
    "Isn't it fantastic that you can change your mind and create all these happy things?",
    "It's so important to do something every day that will make you happy.",
    "I think there's an artist hidden at the bottom of every single one of us.",
]

//Randomize function

randomize =()=> {
    let i,j,k;

    for (i = quotes.length -1; i > 0; i--){
        j = Math.floor(Math.random() * i) 
        k = quotes[i]
        quotes[i] = quotes[j]
        quotes[j] = k
        }
    }

    const activityButton = document.getElementById("button");
    activityButton.addEventListener('click',randomize);   

    //Make text box appear when you click button

    activityButton.addEventListener("click", function() {
        document.getElementById("quote-container").classList.add('show');
        document.getElementById("quote-container").innerHTML = quotes[0];
    });






