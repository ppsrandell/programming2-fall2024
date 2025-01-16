
    const pairs =[
        {word: "Neurons", match: "excitable cells that respond to stimuli by conducting impulses to transmit signals"},
        {word: "Neuroglia", match: "supportive cells that provide nutrition, insulation, and help with signal transmission"},
        {word: "Soma", match: "the life support containing the nucleus and most organelles"},
        {word: "Dendrites", match: "the main receptor of signals"},
        {word: "Axon", match: "generates and transmits nerve impulses"},
        {word: "Myelin Sheath", match: "covers long axons to protect and electrically insulate them to increase the speed of nerve impulse transmission"},
        {word: "Nodes of Ranvier", match: "unmyelinated gaps in the myelin sheath that aid in increasing the velocity of nerve signal conduction"},
        {word: "Sensory Neurons (afferent neurons)", match: "transmit info from sensory receptors to CNS"},
        {word: "Motor Neurons (efferent neurons)", match: "transport info from CNS to rest of the body"},
        {word: "Central Nervous System", match: "brain and spinal cord"},
        {word: "Peripheral Nervous System", match: "communication system between the CNS and the rest of the body"},
        {word: "Cerebrospinal Fluid", match: "central nervous system, brain, and spinal cord"},
        {word: "Ventricles", match: "hollow fluid-filled cavities within brain that make cerebrospinal fluid"},
        {word: "Cerebrum", match: "left and right hemispheres/divided into 4 lobes functions in learning: speech, emotion, reasoning, vision, hearing, and fine movements"},
        {word: "Cerebral Cortex", match: "arranged in folds to increase surface area/surface of cerebrum"},
        {word: "Cerebellum", match: "maintains posture and balances/coordinates timing and patterns for smooth and agile subconscious movements"},
        {word: "Brainstem", match: "coordinates automatic functions like respiration, circulation, body temperature, sleep, digestion, and swallowing"},
        {word: "Autonomic Nervous System", match: "controls involuntary movements of the heart, lungs, stomach, etc."},
        {word: "Somatic Nervous System", match: "controls voluntary movements"},
        {word: "Parasympathetic Nervous System", match: "calms you down"},
        {word: "Sympathetic Nervous System", match: "excites you/amps you up"},
        {word: "Neurotransmitters", match: "chemicals released from neurons to cross synapses"},
        {word: "Hormones", match: "chemicals released from glands into the bloodstream"},
        {word: "Afferent Nerve Fibers", match: "axons of sensory neurons that carry sensory information from sensory receptors to the central nervous system"},
    ];
    
    let cards = document.getElementsByClassName("item");
    //create a new array for slected pairs this round
        let cardPairs = [];
    let score = "";
    let tally = 0;
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
        score = document.getElementById("tally");
        //shuffle list of pairs
        console.log(pairs);
        let shuffledPairs = shuffleArray(pairs);
        console.log(shuffledPairs);
        //add the first cards.length/2 pairs (word and match) to new array
        cardPairs = [];
        for (let i=0; i<cards.length/2; i++){
            cardPairs.push(shuffledPairs[i].word);
            cardPairs.push(shuffledPairs[i].match);
        }
        console.log(cardPairs);
    
        
        console.log(pairs);
        //shuffle that array
        cardPairs = shuffleArray(cardPairs);
        console.log(cardPairs);
        //iterate over that array to assign cards
        cards = document.getElementsByClassName("item");
        console.log(cards);
        for (let i = 0; i<cards.length; i++){
            console.log(cardPairs[i]);
            cards[i].innerText = cardPairs[i];
            cards[i].onclick = isClicked;
        }
    }
    
    // this happens when a card is selected
    function isClicked(e){ 
        let cardClicked = e.srcElement;
        if (cardClicked.classList.value.indexOf("clicked") != -1){
            cardClicked.classList.remove("clicked");
            //cardClicked.style.backgroundColor = "#ddbbcd";
            return;
        }
        
        console.log(cardClicked.classList);
        //cardClicked.style.backgroundColor = "#9bc9e2";
        cardClicked.classList.add("clicked");
        let clicked = document.getElementsByClassName("clicked");
        console.log(clicked);
        if (clicked.length == 2){
            //look for a match
            if (isMatch(clicked[0].innerText, clicked[1].innerText)){
                clicked[0].style.backgroundColor = "#D4F3B7";
                clicked[1].style.backgroundColor = "#D4F3B7";
                clicked[0].disabled = true;
                clicked[1].disabled = true;
                
                clicked[0].classList.remove("clicked");
                clicked[0].classList.remove("clicked");
                
                // adding to the tally when the match is correct
                tally +=1; 
                score.innerText= tally+"/24 Correct";
                console.log(pairs);
                if (tally  == 12){
                    if(pairs.length != 12) {
                     for (let i=0; i<cardPairs.length; i++){
                        for (let j=0; j<pairs.length;j++){
                            if (cardPairs[i]==pairs[j].word){
                                //console.log(cardPairs[i]);
                                //console.log(pairs[j].word);
                                pairs.splice(j, 1);
                            }
            }
        }
                    }
                    console.log(pairs);
                    for (let i =0; i<cards.length; i++){
                        cards[i].style.backgroundColor = "#ddbbcd";
                        cards[i].disabled = false;
                    }
                    shuffleAssign();
                }
                
            } else {
                clicked[0].classList.remove("clicked");
                clicked[0].classList.remove("clicked");
            }
        }
    }
    
    // when the match is correct
    function isMatch(item1,item2){
        for (let i = 0; i < pairs.length; i++){
            if (item1 === pairs[i].word && item2 === pairs[i].match || item2 === pairs[i].word && item1 === pairs[i].match){
                return true;
            } 
            
            // make the cards reload to finish the rest of the set
            
        }
        return false;
    }

//timer function with a limit of five minutes
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function start() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}



// when they finish with the game
function finished() {
  alert('You finished the game! Congratulations!');
}

if (tally == 24){
    finished();
}
    

    

    // restart button
    // include timer

    
    
    shuffleAssign();
//});


