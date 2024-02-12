// écris la chanson 99 bottles en console !
function beer() {
    let count = 99;
    let sub = 98
    while (count !== 0){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.")

        if (sub === 0){
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }else {
            console.log("Take one down and pass it around, " + sub + " bottles of beer.")
        }
        
        count--;
        sub--;
    }
    if(count === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.")
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
}

beer();