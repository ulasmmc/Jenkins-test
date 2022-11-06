$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TF_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should log in to dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "validate-techfios-login-functionality;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 15,
      "id": "validate-techfios-login-functionality;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 5559792100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should log in to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "Steps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 735480100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_submit()"
});
formatter.result({
  "duration": 1573937400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_log_in_to_dashboard_page()"
});
formatter.result({
  "duration": 603274300,
  "status": "passed"
});
formatter.after({
  "duration": 1392322600,
  "status": "passed"
});
});