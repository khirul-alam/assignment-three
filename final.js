
//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount){
    if(typeof currentPrice !== "number"|| typeof discount !== "number"|| discount <0 || discount > 100){
        return "Invalid";
    }
    let disPrice = (currentPrice * discount)/100;
    let finalPrice = currentPrice - disPrice;
    
    return finalPrice.toFixed(3); 
}
//Problem-02: OTP Validation for Zapshift

function validOtp(otp){
    if(typeof otp !== "string"){
        return "Invalid";
    }
    if (otp.length !==8){
        return false;
    }
    if (!otp.startsWith("ph-")){
        return false;
    }
    return true;
    
}
//Problem-03: BCS Final Score Calculator
function finalScore(result){
    if (typeof result !== "object" || result === null) {
        return "Invalid";
    }

    const { right, wrong, skip } = result;
    if(typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number"){
        return "Invalid";
    }
    if(right + wrong + skip !==100){
        return "Invalid";
    }
    let score = (right * 1) - (wrong * 0.5);
    
    return Math.round(score);
}
//Problem-04: Upcoming Gono Vote
function gonoVote(votes){
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    let haCount = 0;
    let naCount = 0;
    for(let i = 0; i < votes.length; i++){
        if(votes[i] === "ha"){
            haCount++;
    } else if (votes[i] === "na"){
        naCount++;
    }
}

    if(haCount>naCount){
        return true;
    }
    else if(haCount === naCount){
        return "equal"
    }
    else{
        return false;
    }
}

//Problem-05: Text Analyzer for an AI Company

function analyzeText(text){
    if(typeof text !== "string" || text.trim() === ""){
        return "Invalid"
    }
    const words = text.split(" ");
    let longestWord = " ";

    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    const totalChar = text.split(" ").join("").length;
    return{
        longwords: longestWord,
        token: totalChar
    };
}
