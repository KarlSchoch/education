// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate: function() {
      // Choose random base
      tgtBase = Math.floor(Math.random() * 15)
      // Find out value at that current base
      curBaseVal = arr[tgtBase]      
      // Set up possible bases
      dnaBases = ['A', 'T', 'C', 'G'];
      // Exclude current val from possible bases
      dnaBases = dnaBases.filter(
        el => el !== curBaseVal
      )
      // Update arr
      this.dna[tgtBase] = dnaBases[
        Math.floor(Math.random() * dnaBases.length)
      ]
    },
    compareDNA: function(pAequor) {
      ct = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          ct += 1
        }
      }
      console.log(`Specimen #${this.specimenNum} and Specimen #${this.specimenNum} have ${Math.round((ct/this.dna.length) * 100)}% DNA in common.`)
    },
    willLikelySurvive: function() {
      return (this.dna.filter(el => el === 'C' | el === 'G').length / this.dna.length) >= 0.6 ? true : false;
    }
  }
}


let validSpecimens = []
let ct = 1

while (validSpecimens.length < 30) {
  // Create a specimen using the factory
  specimen = pAequorFactory(ct, mockUpStrand())
  // If the specimen will likely survive, move to the valid specimens
  if (specimen.willLikelySurvive()) {
    validSpecimens.push(specimen)
  }
  // Increment the counter to create a unique ID for the specimens
  ct += 1
}
console.log(validSpecimens[0])