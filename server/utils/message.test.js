const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate location messwg correct', () => {
    var from = 'Mike';
    var latitude = 1;
    var longitude = 1;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
    expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
  });
});
