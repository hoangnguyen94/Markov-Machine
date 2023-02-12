/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map()

    for ( let i = 0; i < this.words.length; i += 1 )
    {
      let word = this.words[ i ];
      let nextword = this.words[ i + 1 ] || null;
      if ( chains.has( word ) ) chains.get( word ).push( nextword );
      else chains.set(word, [nextword])
    }
    this.chain = chains;
  }

  static choise ( arr )
  {
    return arr[ Math.floor( Math.random() * arr.length ) ];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    // pick a random key to begin
    let keys = Array.from( this.chains.keys() );
    let key = MarkovMachine.choice( keys );
    let out = [];
    // produce markov chain until reaching termination word
    while ( out.length < numWords && key !== null )
    {
      out.push( key );
      key = MarkovMachine.choice(this.chains.get(key))
    }
    return out.join( " " );
  }
}

module.exports = { MarkovMachine, };
