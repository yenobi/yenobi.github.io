var userList = [];

for (var i = 1; i <= 5; i++) {
  var userName = prompt("Add username");
  userList.push(userName);
  console.log(userList);
}


var userVerificationName = prompt("Add your username");

for (var j = 1; j <= userList.length; j++) {
  userVerificationName === userList[j];

  if ( userVerificationName === userList[j] ) {
    alert("Welcome home, " + userVerificationName + "!");
    break;
  } else if( j = userList.length ){
    alert("Error: " + userVerificationName + ", you aren't on a board!");
  }
}
