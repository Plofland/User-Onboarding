//Arrange - set up webpage, form input, etc.
//Act - simulate user action such as a button click or filling out a form input
//Assert - verify that the simulated user action results in the expected output

const randomRole = () => {
  const random = Math.random();
  if (random < 0.3) {
    return "Student";
  }
  if (random > 0.3 && random < 0.6) {
    return "TA";
  }
  if (random > 0.6 && random < 0.9) {
    return "Instructor";
  } else return "Alumni";
};

describe("User Onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passInput = () => cy.get('input[name="password"]');
  const tosCheckbox = () => cy.get('input[name="terms"]');
  const roleSelect = () => cy.get('select[name="role"]'); //make randomRole() assign a role
  //   const roleOption = () => cy.get('option[value="student"]');
  const submitBtn = () => cy.get('button[type="submit"]');
  it("can fill out all inputs and activate submit button", () => {
    nameInput().type("Peter");
    nameInput().should("have.value", "Peter");
    emailInput().type("here@here.com");
    nameInput().should("have.value", "Peter");
    passInput().type("secrets");
    passInput().should("have.value", "secrets");
    tosCheckbox().click();

    submitBtn().should("be.disabled");
    roleSelect().select(randomRole());
    submitBtn().should("not.be.disabled");
    submitBtn().click();
  });
  it("will show errors for invalid inputs", () => {
    nameInput().type("P");
    submitBtn().should("be.disabled");
    emailInput().type("here.com");
    submitBtn().should("be.disabled");
    passInput().type("sec");
    submitBtn().should("be.disabled");
    tosCheckbox().should("be.not.checked");
    tosCheckbox().click();
    tosCheckbox().should("be.checked");
    submitBtn().should("be.disabled");
    roleSelect().select(randomRole());
    submitBtn().should("be.disabled");
  });
});
