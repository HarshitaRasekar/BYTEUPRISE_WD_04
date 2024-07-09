const buttons = document.querySelectorAll("#one");
let output = document.querySelector(".output");
let num1 = "0";
let num2 = "0";
let sign = " ";
let cnt = 0;
let string = "";
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let ans;
        if (button.textContent >= 0 && button.textContent <= 9 || button.textContent == ".") {
            if (sign == " ") {
                num1 += button.textContent;
                console.log("NEW num1",num1);
            }
            else if (sign != " ") {
                num2 += button.textContent;
                console.log("NEW num2",num2);
            }
            output.innerText += button.textContent;
        }
        else if (button.innerText == "+" || button.innerText == "-" || button.innerText == "*" ||
            button.innerText == "/") {
            sign = button.innerText;
            output.innerText += button.textContent;
        }
        else if (button.innerText == '=') {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            if (sign == "+") {
                ans = num1 + num2;
            }
            else if (sign == "-") {
                ans = num1 - num2;
            }
            else if (sign == "*") {
                ans = num1 * num2;
            }
            else if (sign == "/") {
                ans = num1 / num2;
            }
            console.log(ans);
            output.innerText = " ";
            output.innerText = ans;
            num1 = output.innerText;
            console.log(num1);
            num2 = 0;
        }
        else if (button.innerText == "AC") {
            output.innerText = " ";
            num1 = 0;
            num2 = 0;
            sign = " ";
        }
        else if (button.innerText == "Dlt") {

            console.log("this output is ",output.innerText);
            output.innerText = output.innerText.slice(0,output.innerText.length-1);
            console.log("final",output.innerText);
            
            let string = output.innerText;
            num1 = "";
            num2 = "";
            sign = "";
            let i=0;
            while(i<string.length)
            {
                if(string[i] == "+" || string[i] == "-" || string[i] == "*" ||
                string[i] == "/")
                {
                    let string1 = string[i];
                    i=i+1;
                    while(i < string.length)
                    {
                      sign = string1;
                      num2 += string[i];
                      i++;
                    }
                    break;
                }
                else{
                    num1 += string[i];
                }
                i++;
            }
            console.log("num1 :",num1,"num2 :",num2);
            output.innerText = string;
        }
    });
});