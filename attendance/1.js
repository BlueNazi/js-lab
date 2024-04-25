


function countPresent(att){
    let presentCount = 0;
    for(let i = 0; i<att.length; i++ ){
        if(att[i]===true){
            presentCount++;
        }
    }
    return presentCount;
}