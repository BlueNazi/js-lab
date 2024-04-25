const f1 = ["sheep", "sheep", "wolf", "sheep"];
const f2 = ["sheep", "sheep", "wolf"];


function wolfWarning(harchi) {


    if (harchi[harchi.length - 1] === "wolf") {
        console.log("U R about to be eaten by a wolf!");
    }
    else {
        console.log("Pls go away and stop eating my sheeps.")
    }
}