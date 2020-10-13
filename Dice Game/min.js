document.getElementById("click").onclick=function(){fun()};
document.getElementById("Score")=function(){scr()};

function fun()
{
    var ranNum1=Math.floor(Math.random() * 6) + 1;
    var ranNum2=Math.floor(Math.random() * 6) + 1;
    var ranNum3=Math.floor(Math.random() * 6) + 1;

    var ranImg1="img/Dice" + ranNum1 + ".png";
    var ranImg2="img/Dice" + ranNum2 + ".png";
    var ranImg3="img/Dice" + ranNum3 + ".png";

    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src",ranImg1);

    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src",ranImg2);

    var img3 = document.querySelectorAll("img")[2];
    img3.setAttribute("src",ranImg3);

    if(ranNum1==ranNum2||ranNum2==ranNum3||ranNum1==ranNum3)
        document.querySelector("h2").innerHTML="Draw!!"
    else if(ranNum1>ranNum2 && ranNum1>ranNum3)
        document.querySelector("h2").innerHTML="Player 1 wins!!"
    else if(ranNum2>ranNum1 && ranNum2>ranNum3)
        document.querySelector("h2").innerHTML="Player 2 wins!!"
    else 
        document.querySelector("h2").innerHTML="Player 3 wins!!"
}