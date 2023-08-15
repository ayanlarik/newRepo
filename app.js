function submit (){
    let userInput1 = document.querySelector("#inputNumber1").value;
    
    console.log("userInput1:" ,userInput1)
    
    let result = "";
    
    if(userInput1 > 50000){
    
        result = "you are over the limit, the amount is 50 thousands";
    }else{
    
        result = " you are within the limit";
    }
    
    console.log("result",result)
    
    let mainHeading = document.querySelector("#heading")
    
    mainHeading.innerText = result;
    
    
    
    
    }
    
    
    
    // function clickBtn(){
    // let selector = document.querySelector("#main-selector");
    // selector.innerHTML = "Hello World"
    // console.log(selector)
    // }
    
    