let flag = true;

function randomWallpaper(){

    const img = document.querySelector("img");
    if(flag){
        img.setAttribute("src", "2.jpg")
        flag = false;
    }
    else{
        img.setAttribute("src", "1.jpg")
        flag = true;
    }


}

//man nemidoonam chejoori bayad style axe dovom ro taqir bedam =]]]]]]