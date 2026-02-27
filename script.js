const words = ["Programmer", "Web Developer", "Student"];
let i = 0;
let j = 0;
let current = "";
let deleting = false;

const typing = document.querySelector(".typing");

function type(){
    current = words[i];

    if(!deleting){
        typing.textContent = current.slice(0, j++);
        if(j > current.length){
            deleting = true;
            setTimeout(type, 1000);
            return;
        }
    }
    else{
        typing.textContent = current.slice(0, j--);
        if(j < 0){
            deleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, 90);
}

type();