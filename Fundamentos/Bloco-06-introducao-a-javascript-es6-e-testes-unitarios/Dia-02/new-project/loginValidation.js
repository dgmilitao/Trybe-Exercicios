const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta.`;
};

const loginErrorMessage = (user) => {
  return `Pessoa usuario ${user} não encontrada, tente novamente.`;
};

const user = {
  userName: "Bob",
  password: 123456,
};

const verifyCredentials = (userInfo) => {
  const userName = user.userName;
  const password = user.password;
  if (password === 123456 && userName === "Bob") {
    return greetingMessage(userName);
  } else {
    return loginErroMessage(userName);
  }
};

console.log(verifyCredentials(user));

module.exports = {greetingMessage, loginErrorMessage, verifyCredentials};