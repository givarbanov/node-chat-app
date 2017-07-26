
class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    if(user){
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
  getUser (id) {
    var userList = this.users.filter((user) => user.id === id);
    return userList[0];
  }
  getUserList (room) {
    var userList = this.users.filter((user) => user.room === room);
    var nameList = userList.map((user) => user.name);
    return nameList;
  }
}

module.exports = {Users};
