var username = document.getElementById("name")
var email = document.getElementById("email")
var number = document.getElementById("number")
var mass = document.getElementById("exampleFormControlTextarea1")
var err = document.getElementsByClassName("err")

var letter = /^[a-zA-Z]+$/
var flag = 0
var numletter = /^[0-9]+$/

var mailformat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;



$("#submit-form").submit((e)=>{
    e.preventDefault()
    flag = 0
    
     checknumber()
     checkphoneNumber()
     checkemail()
     checkmessage()
    //  console.log(flag)
     if(flag == 4){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbywsbCugC8028mvxyO_XEhWOqR7KZko0guGItX4kA/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
     }

})

function checknumber(){

    // console.log(username.value)
    if(username.value == ""){
        err[0].innerHTML = "null not allowed"
    }else if(username.value.trim() == false){
        err[0].innerHTML = "space not allowed"
    }else if(letter.test(username.value) == false){
        err[0].innerHTML = "only character are allowded"
    }else{
        err[0].innerHTML = ""
        flag += 1
        console.log(flag)
    }
}


function checkemail(){
    if(mailformat.test(email.value)== false){
        err[1].innerHTML = "Email not valid .Type full email"
        
    }
    else{
        err[1].innerHTML = ""
        flag+=1;
        console.log(flag)

    }
}


function checkphoneNumber(){
    if(number.value == ""){
        err[2].innerHTML = "null not allowed"
    }
    else if(number.value.trim() ==""){
        err[2].innerHTML = "space not allowed"
    }
    else if(numletter.test(number.value) == false){
     err[2].innerHTML = "only numbers are allowed"
    }
    else if(number.value.length > 10){
            err[2].innerHTML = "only 10 numbers"
    }
    else{
        err[2].innerHTML = ""
        flag+=1;
    }
}
function checkmessage(){
    if( mass.value.length < 10){
        err[3].innerHTML = "write more than 10 words"
    }
    else{
        err[3].innerHTML =""
        flag+=1
        console.log(flag)
    }
}

//    else if(messegeh.value ==""){
//         err[3].innerHTML = "null space invalid"
//     }