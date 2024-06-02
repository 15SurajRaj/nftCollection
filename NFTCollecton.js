// Project: Create a NFT Collection

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Step 1: Create an ARRAY type variable to hold the NFTs.
let nftStorage = [];

/* 
Step 2: This function will take in some values as parameters,
create an NFT object using the parameters passed to it for its metadata, and store it in the variable above.
*/
function mintNFT(make, model, year, color) {
  // Create an object inside the function to hold the metadata of the NFT
  const nft = {
    make : make,
    model : model,
    year : year,
    color : color
  };
  // Add the minted NFT to the collection
  nftStorage.push(nft);
}

/*
Step 3: The listNFTs() function will print all of your NFTs metadata to the console.
*/
function listNFTs() {
  // Loop through each NFT in the collection and print its metadata
  nftStorage.forEach((nft, i) => {
    console.log(`NFT : ${i + 1}`);
    console.log(`Make : ${nft.make}`);
    console.log(`Model : ${nft.model}`);
    console.log(`Year : ${nft.year}`);
    console.log(`Color : ${nft.color}`);
    console.log("\n");
  });
}

/*
Step 4: getTotalSupply() should return the number of NFTs you have created.
*/
function getTotalSupply() {
  // Return the total number of NFTs in the collection
  return nftStorage.length;
}

// Mint some NFTs for famous landmarks
mintNFT("Tesla", "Model", 2020, "Red");
mintNFT("Ford", "Mustang", 1967, "Blue");
mintNFT("Chevrolet", "Corvette", 2021, "Black");
// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());