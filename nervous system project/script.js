document.addEventListener("DOMContentLoaded", () => {
    const pairs =[
        {word: "Neurons", match: "excitable cells that respond to stimuli by conducting impulses to transmit signals"},
        {word: "Neuroglia", match:"supportive cells that provide nutrition, insulation, and help with signal transmission"},
        {word: "Soma", match:"the life support containing the nucleus and most organelles"},
        {word: "Dendrites", match:"the main receptor of signals"},
        {word: "Axon", match:"generates and transmits nerve impulses"},
        {word: "Myelin Sheath", match:"covers long axons to protect and electrically insulate them to increase the speed of nerve impulse transmission"},
        {word: "Nodes of Ranvier", match:"unmyelinated gaps in the myelin sheath that aid in increasing the velocity of nerve signal conduction"},
        {word: "Sensory Neurons", match:"transmit info from sensory receptors to CNS"},
        {word: "Motor Neurons", match:"transport info from CNS to rest of the body"},
        {word: "Cerebrospinal Fluid", match:"central nervous system, brain, and spinal cord"},
    ];
    
    let cards = document.getElementsByClassName("item");
    console.log(cards);
    
    // Fisher-Yates (or Knuth) Shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function shuffleAssign(){
        //shuffle list of pairs
        let shuffledPairs = shuffleArray(pairs);
        console.log(shuffledPairs);
        //create a new array for slected pairs this round
        let cardPairs = [];
        //add the first cards.length/2 pairs (word and match) to new array
        for (let i=0; i<cards.length/2; i++){
            cardPairs.push(shuffledPairs[i].word);
            cardPairs.push(shuffledPairs[i].match);
        }
        console.log(cardPairs);
        //shuffle that array
        cardPairs = shuffleArray(cardPairs);
        //iterate over that array to assign cards
        for (let i = 0; i<cardPairs.length; i++){
            cards[i].innerText = cardPairs[i];
            cards[i].onclick = isClicked;
        }
    }
    
    function isClicked(e){
        let cardClicked = e.srcElement;
        cardClicked.classList.add("clicked");
        let numClicked = document.getElementsByClassName("clicked").length;
        if (numclicked == 2){
            //look for a match
        }
    }
    
    function isMatch(item1,item2){
        for (let i = 0; i < Object.keys(pairs).length; i++){
            if (item1 == pairs[i].word & item2 == pairs[i].match){
                return true;
            }
            if (item2 == pairs[i].word & item1 == pairs[i].match){
                return true;
            } 
        }
        return false;
    }
    
    shuffleAssign();
});


