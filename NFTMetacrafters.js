// create a variable to hold your NFT's
let NFTCollections = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
// Alien, numberOfEyes, gender, clothes, numberOfHands, colorBackground
function mintNFT(eyes, gender, clothes, hands, background) {
    const aliens = {
        eyes: eyes,
        gender: gender,
        clothes: clothes,
        hands: hands,
        background: background
    }
    NFTCollections.push(aliens);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < NFTCollections.length; i++){
        console.log(NFTCollections[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log("TOTAL NFT COLLECTED: " + NFTCollections.length);
}

// call your functions below this line
mintNFT(3, "Male", "Jacket", 2, "Black");
mintNFT(4, "Female", "T-shirt", 10, "Purple");
mintNFT(8, "Male", "Jersey Shirt", 4, "Yellow");

listNFTs();

getTotalSupply();