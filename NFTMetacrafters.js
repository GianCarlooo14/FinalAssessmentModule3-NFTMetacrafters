
let NFTCollections = [];

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


function listNFTs() {
    for(let i = 0; i < NFTCollections.length; i++){
        console.log(NFTCollections[i]);
    }
}

function getTotalSupply () {
    console.log("TOTAL NFT COLLECTED: " + NFTCollections.length);
}

mintNFT(3, "Male", "Jacket", 2, "Black");
mintNFT(4, "Female", "T-shirt", 10, "Purple");
mintNFT(8, "Male", "Jersey Shirt", 4, "Yellow");

listNFTs();

getTotalSupply();
