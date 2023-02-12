const { MarkovMachine } = require('./markov');

describe('test markov machine', function () {
  test('test chains', () => {
    const text =
      'do you like green eggs and ham. I do. I do like green eggs and ham, Sam I am.';
    const mm = new MarkovMachine(text);
    mm.makeChains();

    expect(mm.chain.get('you')).toEqual(['like']);
    expect(mm.chain.get('do')).toContain('you');
    expect(mm.chain.get('do')).toContain('like');
    expect(mm.chain.get('am.')).toContain(null);
  });
});