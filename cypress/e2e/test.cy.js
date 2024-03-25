import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      it("Text Align Center of headings", () => {
        cy.visit(url);
        cy.get("#top>h1")
          .should("have.css", "text-align")
          .and("match", /center/)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#bottom>h1")
          .should("have.css", "text-align")
          .and("match", /center/)
          .then(() => {
            acc_score += 0.5;
          });
      }); //1.5
      it("Top Section has display Grid and grid-template-columns Property", () => {
        cy.get("#top>div")
          .should("have.css", "display")
          .and("match", /grid/)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#top>div")
          .should("have.css", "grid-template-columns")
          .then(() => {
            acc_score += 0.5;
          });
      }); //1.5
      it("Bottom Section has display Grid and grid-template-columns Property", () => {
        cy.get("#bottom>div")
          .should("have.css", "display")
          .and("match", /grid/)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#bottom>div")
          .should("have.css", "grid-template-columns")
          .then(() => {
            acc_score += 0.5;
          });
      }); //1.5
      it("Mid Section has display Grid and grid-template-columns Property", () => {
        cy.get("#mid>div")
          .should("have.css", "display")
          .and("match", /grid/)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#mid>div")
          .should("have.css", "grid-template-columns")
          .then(() => {
            acc_score += 0.5;
          });
      }); //1.5
      it("In Bottom and Top section all product heading will have text-align center", () => {
        cy.get("h2")
          .should("have.css", "text-align")
          .and("match", /center/)
          .then(() => {
            acc_score += 1;
          });
        cy.get("h3")
          .should("have.css", "text-align")
          .and("match", /center/)
          .then(() => {
            acc_score += 1;
          });
      }); //2
    }

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
