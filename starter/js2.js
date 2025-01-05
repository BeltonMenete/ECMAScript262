"use strict";
// Lesson

const jonas = {
  firstName: "Jonas",
  lastName: "Menete",
  sex: "male",
  birthYear: 1991,
  job: "teacher",
  friends: [" Michael", " Peter", " Stephen"],
  hasDriversLicense: true,
  calAge: function () {
    return 2024 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName + " " + this.lastName} is a ${this.calAge()}-year old ${
      this.sex == "male" ? "man" : "woman"
    } and ${this.sex == "male" ? "he" : "she"} is a ${this.job} ${
      this.sex == "male" ? "his" : "her"
    } friends are ${this.friends.toString()} and ${
      this.hasDriversLicense ? "does have" : "does not have"
    } a drivers license`;
  },
};

console.log(jonas.getSummary());
