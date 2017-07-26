const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'Java course'
    }, {
      id: '3',
      name: 'Tedy',
      room: 'Node course'
    }]
  });

  it('should add user', () => {
    var user = {
      id: '123',
      name: 'Georgi',
      room: 'Office'
    };
    var users = new Users();
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove user', () => {
    var userId = '2';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser('6');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2'
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var user = users.getUser('4');
    expect(user).toNotExist();
  });

  it('should return all users in node course room', () => {
    var resUsers = users.getUserList('Node course');
    expect(resUsers).toEqual(['Mike', 'Tedy']);
  });

  it('should return all users in java course room', () => {
    var resUsers = users.getUserList('Java course');
    expect(resUsers).toEqual(['Jen']);
  });
});
