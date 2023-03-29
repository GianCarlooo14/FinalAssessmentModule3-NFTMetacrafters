
let NFTCollections = [];

function mintNFT(eyes, gender, clothes, hands) {
    const aliens = {
        eyes: eyes,
        gender: gender,
        clothes: clothes,
        hands: hands
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

mintNFT(3, "MALE", "JACKET", 2);
mintNFT(4, "FEMALE", "T-SHIRT", 10);
mintNFT(8, "MALE", "JERSEY SHIRT", 4);

listNFTs();

getTotalSupply();
