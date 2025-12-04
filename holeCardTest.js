function testDealerHoleCard() {
    console.group("🕵️‍♀️ Testing Dealer Hole Card Privacy");
    
    // 1. Force a clean start
    console.log("Action: forcing startRound()...");
    startRound(); 

    // --- CHECK 1: LOGIC STATE ---
    // The dealer should logically have 2 cards in the array
    if (dealer.length !== 2) {
        console.error(`❌ FAIL: Dealer logic array should have 2 cards. Found: ${dealer.length}`);
        return;
    } else {
        console.log("✅ PASS: Dealer has 2 cards in memory.");
    }

    // --- CHECK 2: DOM ELEMENT COUNT ---
    // The visual board should have 2 card elements
    const cardContainer = document.getElementById('dealerCards');
    const cardElements = cardContainer.children;
    if (cardElements.length !== 2) {
        console.error(`❌ FAIL: DOM should contain 2 card elements. Found: ${cardElements.length}`);
        return;
    } else {
        console.log("✅ PASS: Dealer DOM has 2 card elements.");
    }

    // --- CHECK 3: THE HOLE CARD (Index 0) ---
    const holeCardEl = cardElements[0];
    const realCardData = dealer[0];
    
    // Check if the specific CSS class is applied
    const hasClass = holeCardEl.classList.contains('face-down');
    
    // Check if the text content hides the rank (It should just be the card back emoji '🂠')
    // We specifically check that it DOES NOT contain the real rank (e.g., "K", "10", "A")
    const content = holeCardEl.textContent;
    const isTextHidden = content.includes('🂠') && !content.includes(realCardData.rank);

    if (hasClass && isTextHidden) {
        console.log("✅ PASS: Hole card has 'face-down' class and content is obscured.");
    } else {
        console.error("❌ FAIL: Hole card is visible!", {
            hasClass: hasClass,
            contentDisplayed: content,
            actualCard: realCardData
        });
    }

    // --- CHECK 4: THE VISIBLE CARD (Index 1) ---
    const upCardEl = cardElements[1];
    const isUpCardVisible = !upCardEl.classList.contains('face-down') && upCardEl.innerText.length > 1;
    
    if (isUpCardVisible) {
         console.log("✅ PASS: Second card is correctly visible.");
    } else {
         console.error("❌ FAIL: Second card is hidden but should be visible.");
    }

    // --- CHECK 5: SCORE DISPLAY ---
    // The score should be vague (e.g., "? + 10" or just "?")
    const scoreText = document.getElementById('dealerValue').textContent;
    if (scoreText.includes('?')) {
        console.log(`✅ PASS: Dealer score is hidden/partial: "${scoreText}"`);
    } else {
        console.error(`❌ FAIL: Dealer score reveals too much info: "${scoreText}"`);
    }

    console.groupEnd();
    console.log("%c✨ Test Complete", "color: #3ddc84; font-weight: bold; font-size: 1.2em;");
}

// Run the test immediately for the team
testDealerHoleCard();
