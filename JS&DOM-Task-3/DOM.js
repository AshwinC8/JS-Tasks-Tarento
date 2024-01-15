//repeated functions
function clear_next_state_div(){
    var next_state_div = document.getElementById("next_state");

    for( var i=0 ; i<next_state_div.classList.length ; i++ ){
        next_state_div.classList.remove(next_state_div.classList[i]);
    }

    while(next_state_div.lastChild) {
        next_state_div.lastChild.remove();
    }
}


function one_option(){
    var options_div = document.getElementById("next_state");
    options_div.classList.add("next_state_1_buttons");
    
    var center_button = document.createElement("button");
    center_button.classList.add("center_button");
    center_button.innerHTML = "<p>Restart</p>" ;
    options_div.appendChild(center_button);
    
    return center_button;
}


function two_options(){
    var options_div = document.getElementById("next_state");
    options_div.classList.add("next_state_2_buttons");
    
    var left_button = document.createElement("BUTTON");
    var left_button_image = document.createElement("img");
    left_button_image.src = "./assets/arrow-left.png"
    var left_button_text = document.createElement("p");
    left_button.appendChild(left_button_image);
    left_button.appendChild(left_button_text);
    left_button.setAttribute("id","left_button");

    var right_button = document.createElement("button");
    var right_button_image = document.createElement("img");
    right_button_image.src = "./assets/arrow_right.png";
    var right_button_text = document.createElement("p");
    right_button.appendChild(right_button_text);
    right_button.appendChild(right_button_image);
    right_button.classList.add("right_button");
    
    options_div.appendChild(left_button);
    options_div.appendChild(right_button);

    return [left_button_text, right_button_text, left_button, right_button];
}



//pages
function page0(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = "You find yourself in front of a spooky, abandoned inn. There's a sign that reads, \"Beware of Ghosts. \" You have two choices";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/haunted-house.jpg"
    
    var options = two_options();
    var left_button_text = options[0];
    var right_button_text = options[1];
    var left_button = options[2];
    var right_button = options[3];
    
    left_button_text.innerText = "Walk away and continue your journey.";
    right_button_text.innerText = "Enter the inn";

    
    left_button.addEventListener("click", page2); 
    right_button.addEventListener("click", page1);
} 


function page1(){
    clear_next_state_div();
    
    var current_desc = document.getElementById("current_state");
    current_desc.innerText = "You decide to enter the inn. It's pitch black inside, and strange noises echo through the hallways";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/haunted-house-door.jpg"
    
    
    var options = two_options();
    var left_button_text = options[0];
    var right_button_text = options[1];
    var left_button = options[2];
    var right_button = options[3];
    
    left_button_text.innerText = "Explore the ground floor.";
    right_button_text.innerText = "Head up the creaky staircase";
    
    left_button.addEventListener("click", page1_1);
    right_button.addEventListener("click", page1_2);
}

function page1_1(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = "You choose to explore the ground floor and stumble upon a hidden treasure chest. Do you dare to open it?";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/haunted-house-chest.jpg"


    var options = two_options();
    var left_button_text = options[0];
    var right_button_text = options[1];
    var left_button = options[2];
    var right_button = options[3];
    
    left_button_text.innerText = "Open the chest.";
    right_button_text.innerText = "Leave the chest alone.";
    
    left_button.addEventListener("click", page1_1_1);
    right_button.addEventListener("click", page1_1_2);
}


function page1_1_1(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = "You bravely open the chest and find a valuable gemstone. You've made a thrilling discovery!";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/chest-opened.jpg"

    var current_button = one_option();
    
    current_button.addEventListener("click", page0);    
}


function page1_1_2(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = "You decide to leave the chest alone and continue exploring. You might uncover more secrets.";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/explore-ground-floor.webp"

    var current_button = one_option();
    
    //ghost scaring
    current_button.addEventListener("click", page0);
}


function page1_2(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = "You venture up the creaky staircase, where you encounter a ghostly figure.";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/haunted-house-staircase.jpg"
    
    var options = two_options();
    var left_button_text = options[0];
    var right_button_text = options[1];
    var left_button = options[2];
    var right_button = options[3];
    
    left_button_text.innerText = "Try to communicate with the ghost.";
    right_button_text.innerText = "Flee back downstairs.";
    
    left_button.addEventListener("click", page1_2_1);
    right_button.addEventListener("click", page1_1);
}


function page1_2_1(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = "You attempt to communicate with the ghost, and it reveals its tragic story. It may offer you a choice to help it find peace.";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/ghost-story.jpg"

    var options = two_options();
    var left_button_text = options[0];
    var right_button_text = options[1];
    var left_button = options[2];
    var right_button = options[3];
    
    left_button_text.innerText = "Help the ghost find peace.";
    right_button_text.innerText = "Refuse and try to leave the inn.";
    
    left_button.addEventListener("click", page1_2_1_1);
    right_button.addEventListener("click", page1_2_1_2);
}


function page1_2_1_1(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = "You choose to help the ghost find peace, and together, you uncover the truth behind its haunting, providing it with closure.";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/ghost-friend.jpg"

    var current_button = one_option();
    current_button.addEventListener("click", page0);
}


function page1_2_1_2(){
    clear_next_state_div();

    var current_desc = document.getElementById("current_state");
    current_desc.textContent = " You refuse to help and try to leave the inn, but the ghost has other plans. It may let you leave or insist on your assistance.";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/ghost-chase.jpeg"
    
    var current_button = one_option();
    current_button.addEventListener("click", page0);
}


const page2 = () => {
    clear_next_state_div();
    
    var current_desc = document.getElementById("current_state");
    current_desc.innerHTML = "You decide not to enter the inn and continue your journey. The haunted inn remains a mystery, and you may never know its secrets.";
    var current_image = document.getElementById("story_image");
    current_image.src = "./assets/running-away.jpg"

    var current_button = one_option();
    current_button.addEventListener("click", page0);
}

page0();