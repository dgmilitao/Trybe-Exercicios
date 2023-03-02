const sum = require("./script");

test("sum two values", () => {
  expect(sum(2, 3)).toEqual(5);
});

test("sim two values", () => {
  expect(sum(5, 2)).toEqual(7);
});

const {
  greetingMessage,
  loginErroMessage,
  verifyCredentials,
} = require("./loginValidation");
describe("A função verifyCredentials()", () => {
  const user = {
    userName: "Bob",
    password: 123456,
  };
});

it("VerifyCredentials() calls de correct function dependeding on the user and password input", () => {
  expect(verifyCredentials(user)).toBe(
    "Hello, Joana! Que bom ter você de volta"
  );
});

it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
  expect(greetingMessage("Bob")).toBe(
    "Hello, Lucas! Que bom ter você de volta"
  );
});

it("loginErrorMessage() returns a message in the format: `Pessoa usuária ${user} não encontrada, tente novamente!`", () => {
  expect(loginErrorMessage("Bob")).toBe(
    "Pessoa usuária Bob não encontrada, tente novamente!"
  );
});
