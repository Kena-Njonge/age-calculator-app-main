var intervalId;
const date = new Date();

function idle() {
    intervalId = setInterval(function() {
        var results = document.getElementsByClassName("result");
        results[2].innerText = getRandomInt(1, 32);
        results[1].innerText = getRandomInt(1, 12);
        results[0].innerText = getRandomInt(1, 150);
    }, 300);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function stopIdle() {
    clearInterval(intervalId);
}

let isMouseHover = false;
let test = document.getElementById("button-down");
test.addEventListener("mouseleave", idle,false);
test.addEventListener("mouseenter", zero, false);
test.addEventListener("click", () => {
    send();
}, false);

function send(){
    stopIdle();
    var checkValue = check();
    if(checkValue){
        var result = document.getElementsByClassName("result");
        var birthday = document.getElementById("day");
        var birthmonth = document.getElementById("month");
        var birthyear = document.getElementById("year");
        var ageyears = date.getFullYear() - birthyear.value;
        var agemonths;
        var agedays;

        

        if((date.getMonth() - parseInt(birthmonth.value) + 1) < 0){
                ageyears= ageyears - 1;
                console.log("here2");
                console.log(date.getDate());
                if(date.getDate()>birthday.value){
                    for(let i=1; i<12;i++){
                        if((parseInt(birthmonth.value) + i)%12 == date.getMonth()){
                            agemonths = i + 1;
                            console.log("here1");
                            console.log(i);
                            agedays = date.getDate() - birthday.value;
                        }
                    }
                }else
                {   for(let j=1; j<12;j++){
                    if((parseInt(birthmonth.value) + j)%12 == date.getMonth()){
                        agemonths = j + 1;
                        console.log("here4");
                        console.log(j);
                    }
                }
                    for(let i=0; i<31;i++){
                        if((date.getDate() + i)%31 == birthday.value){
                            agedays = i;
                        }
                    }
            }
        } 
        else if((date.getMonth() - parseInt(birthmonth.value)) + 1 > 0){
            if(date.getDate()>birthday.value){
                agemonths = date.getMonth() - parseInt(birthmonth.value) + 1;
                agedays = date.getDate() - birthday.value;
            }else{
                agemonths = date.getMonth() - parseInt(birthmonth.value);
                for(let i=1; i<31;i++){
                    if((date.getDate() + i)%31 == birthday.value){
                        agemonths = i;
                        agedays = i;
                    }
                }
                
            }
        }else if((date.getMonth() + 1 == parseInt(birthmonth.value))){
            console.log("1");
            if(date.getDate() > parseInt(birthday.value)){
                agedays = date.getDate() - birthday.value;
                agemonths = 0;
                ageyears = ageyears;
            }else{
                for(let i=1; i<31;i++){
                    if((date.getDate() + i) == birthday.value){
                        agedays = i;
                        agemonths = 0;
                        ageyears = ageyears - 1;
                    }
                }
            }
        }    
        result[2].innerText = agedays ;
        result[1].innerText = agemonths;
        result[0].innerText = ageyears;
    }
}
function check(){
    var birthday = document.getElementById("day");
    var birthmonth = document.getElementById("month");
    var birthyear = document.getElementById("year");
    var error1 = document.getElementsByClassName("valid-x");
    if((birthyear.value<1850) || birthyear.value>date.getFullYear()){
            error1[2].style.color= "var(--LightRed)";
            error1[1].style.color= "var(--LightRed)";
            error1[0].style.color= "var(--LightRed)";
            zero();
    
    }
    else{   
        if(parseInt(birthmonth.value)>12){
            error1[2].style.color= "var(--LightRed)";
            error1[1].style.color= "var(--LightRed)";
            error1[0].style.color= "var(--LightRed)";
            zero();
        }
        else{
            if(birthday.value>31 ||(birthday.value>29 && parseInt(birthmonth.value)==2) ){
                error1[2].style.color= "var(--LightRed)";
                error1[1].style.color= "var(--LightRed)";
                error1[0].style.color= "var(--LightRed)";
                zero();
            }else{
                error1[2].style.color= "white";
                error1[1].style.color= "white";
                error1[0].style.color= "white";
                return true;
            }
        }
        }
    return false;
    }

function zero(){
    var result = document.getElementsByClassName("result");
    stopIdle();
    result[2].innerText = "--";
    result[1].innerText = "--";
    result[0].innerText = "--";
}


idle();