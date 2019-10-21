


let form__peopleNumber = document.getElementById('form__peopleNumber');
let form__bArea = document.getElementById('form__bArea');
let form__desc = document.getElementById('form__desc');

let form__input = document.getElementsByClassName('form__input');

let valid = document.getElementsByClassName('valid');
let star = document.getElementsByClassName('star');

let num = form__peopleNumber.value*form__peopleNumber.value;
console.log(num);

form__peopleNumber.onblur = function validation() {

    let num = form__peopleNumber.value*form__peopleNumber.value;

    if(!form__peopleNumber.value){
        form__input[1].classList.add("invalid");
        valid[0].classList.remove('_n');
        star[0].classList.remove('star_green');
        star[0].classList.add('star_red');
        return false;
    }
    else if (form__peopleNumber.value > 99 || form__peopleNumber.value < 1){
        form__input[1].classList.add("invalid");
        valid[0].classList.remove('_n');
        star[0].classList.remove('star_green');
        star[0].classList.add('star_red');
        return false;
    }
    else if (Object.is(num, NaN)){
        form__input[1].classList.add("invalid");
        valid[0].classList.remove('_n');
        star[0].classList.remove('star_green');
        star[0].classList.add('star_red');
        // console.log('sdf');
        return false;
    }
    else{
        form__input[1].classList.remove("invalid")
        valid[0].classList.add('_n');
        star[0].classList.remove('star_red');
        star[0].classList.add('star_green');
        return true;
    }
};

form__bArea.onblur = function validation () {

    if (!form__bArea.value){
        form__input[2].classList.add('invalid');
        valid[1].classList.remove('_n');
        star[1].classList.remove('star_green');
        star[1].classList.add('star_red');
        return false;
    }
    else{
        form__input[2].classList.remove('invalid');
        valid[1].classList.add('_n');
        star[1].classList.remove('star_red');
        star[1].classList.add('star_green');
    }
};

form__desc.onblur = function validation () {
    if (!form__desc.value){
        form__input[3].classList.add('invalid');
        valid[2].classList.remove('_n');
        star[2].classList.remove('star_green');
        star[2].classList.add('star_red');
        return false;
    }
    else{
        form__input[3].classList.remove('invalid');
        valid[2].classList.add('_n');
        star[2].classList.remove('star_red');
        star[2].classList.add('star_green');
        return false;
    }
};



const input__file = document.getElementById("form__file");
const count = document.getElementById("count");
input__file.addEventListener("change",e => (count.innerHTML = e.target.files.length)
);

