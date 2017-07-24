const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct messege object', () => {
    var from = 'Jen';
    var text = 'Mesage text';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});
