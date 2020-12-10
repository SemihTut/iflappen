$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/InstallApp.feature");
formatter.feature({
  "name": "Rookie Driver Native App Installation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Installation of the app into different devices \u003cmodel\u003e \u003cversion\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user has an internet connection",
  "keyword": "Given "
});
formatter.step({
  "name": "the user install the app to the device \"\u003cmodel\u003e\" and \"\u003cversion\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see app in the phone menu",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "model",
        "version"
      ]
    },
    {
      "cells": [
        "Google Nexus 6",
        "5.0"
      ]
    },
    {
      "cells": [
        "Google Pixel 3",
        "9.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Installation of the app into different devices Google Nexus 6 5.0",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user has an internet connection",
  "keyword": "Given "
});
formatter.match({
  "location": "ifcompany.StepDefinitions.InstallMobileAppStepDefinition.the_user_has_an_internet_connection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user install the app to the device \"Google Nexus 6\" and \"5.0\"",
  "keyword": "When "
});
formatter.match({
  "location": "ifcompany.StepDefinitions.InstallMobileAppStepDefinition.the_user_install_the_app_to_the_device_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see app in the phone menu",
  "keyword": "Then "
});
formatter.match({
  "location": "ifcompany.StepDefinitions.InstallMobileAppStepDefinition.the_user_should_see_app_in_the_phone_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Installation of the app into different devices Google Pixel 3 9.0",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user has an internet connection",
  "keyword": "Given "
});
formatter.match({
  "location": "ifcompany.StepDefinitions.InstallMobileAppStepDefinition.the_user_has_an_internet_connection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user install the app to the device \"Google Pixel 3\" and \"9.0\"",
  "keyword": "When "
});
formatter.match({
  "location": "ifcompany.StepDefinitions.InstallMobileAppStepDefinition.the_user_install_the_app_to_the_device_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see app in the phone menu",
  "keyword": "Then "
});
formatter.match({
  "location": "ifcompany.StepDefinitions.InstallMobileAppStepDefinition.the_user_should_see_app_in_the_phone_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});