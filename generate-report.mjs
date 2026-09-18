import { generate } from 'multiple-cucumber-html-reporter';

generate({
  jsonDir: "./cypress/reports/",
  reportPath: "./cypress/reports/html/",
});