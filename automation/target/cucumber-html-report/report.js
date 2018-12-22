$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Hpflight_UserRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "newtoursPnrCreation",
  "description": "",
  "id": "newtourspnrcreation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1346587717,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Hpflight registration page",
  "description": "",
  "id": "newtourspnrcreation;hpflight-registration-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Registartion"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on rhp Flight egestration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the information of User",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Registration should be successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinition.i_am_on_rhp_Flight_egestration_page()"
});
formatter.result({
  "duration": 137090043,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinition.enter_the_information_of_User()"
});
formatter.result({
  "duration": 543657,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinition.registration_should_be_successfull()"
});
formatter.result({
  "duration": 2725689,
  "error_message": "java.lang.AssertionError: not match\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat StepDefinitions.MyStepDefinition.registration_should_be_successfull(MyStepDefinition.java:66)\n\tat ✽.Then Registration should be successfull(features/Hpflight_UserRegistration.feature:7)\n",
  "status": "failed"
});
formatter.after({
  "duration": 140386505,
  "status": "passed"
});
formatter.before({
  "duration": 685157136,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Hpflight registration page",
  "description": "",
  "id": "newtourspnrcreation;hpflight-registration-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Registartion"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on rhp Flight egestration page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enter the information of User",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Registration should be successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinition.i_am_on_rhp_Flight_egestration_page()"
});
formatter.result({
  "duration": 2028740,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinition.enter_the_information_of_User()"
});
formatter.result({
  "duration": 777971,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinition.registration_should_be_successfull()"
});
formatter.result({
  "duration": 311085,
  "error_message": "java.lang.AssertionError: not match\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat StepDefinitions.MyStepDefinition.registration_should_be_successfull(MyStepDefinition.java:66)\n\tat ✽.Then Registration should be successfull(features/Hpflight_UserRegistration.feature:13)\n",
  "status": "failed"
});
formatter.after({
  "duration": 84908233,
  "status": "passed"
});
});