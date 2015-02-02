// @TODO
// 1. Get Url
var webdriverio = require('webdriverio'),
    options = {
        desiredCapabilities: {
            browserName: 'phantomjs'
        }
    },
    emailId  = process.argv[2],
    password = process.argv[3],
    client = webdriverio.remote(options);

    client.addCommand("navigateProfilePage", function(customVar, cb) {
      return this.click("#leftNav_updateProfile")
      .click("#leftNav_updateProfile > ul:nth-child(1) > li:nth-child(1) > a:nth-child(2)",function() {
        cb();
        console.log(customVar);
      });
    });

function frontPageLogin()  {
    return client
    .init()
    .once('countme', function(e) {
      console.log('elements were found');
    })
    .url('http://www.naukri.com')
    .saveScreenshot("./loginPageSnapShot.png", function(err,screenshot, res){
      console.log(err);
    })
    .getTitle()
    .getSource()
    .pause(3000)
    .click("#login_Layer")
    // .click('*[id="login_Layer"]')
    // .log('client')
    .setValue('*[id="eLogin"]', emailId)
    .setValue('*[id="pLogin"]',password)
    .click("div.row:nth-child(13) > button:nth-child(1)");
}

function loginPage()  {
    return client
    .init()
    .once('countme', function(e) {
      console.log('elements were found');
    })
    .url('http://login.naukri.com')
    .click('*[id="login_Layer"]')
    // .log('client','ALL')
    .click('//*[@id="emailRad"]')
    .pause(10000)
    .saveScreenshot("./loginPageSnapShot.png", function(err,screenshot, res){
      console.log(err);
    })
    .waitFor('#emailTxt', 5000, function(err, res) {
        console.log(err);
    })
    .submit("#logFormI")
    .setValue('#emailTxt', emailId)
    .setValue('#pwd1',password)
    .click('#sbtLog');
}

function updateProfilePage() {
var frontPageln = frontPageLogin();

      frontPageln
      .pause(3000)
      .navigateProfilePage('a custum value', function(err, result) {

      })
      .pause(2000)
      .setValue("#summary","Team Lead with 6+ experience in USA and overall 13+ Experience working in Java8 Nodejs Backbonejs Javascript Selenium Underscorejs AWS JQuery AngularJS")
      .pause(2000)
      .getText("#summary", function(err, text){
        console.log(text);
      })
      .saveScreenshot("./summarySnapShot1.png", function(err,screenshot, res){
        console.log(err);
      })
      .click(".w150bt", function(err,res){
        // console.log(res);
      })
      .navigateProfilePage('a custum value', function(err, result) {
          this.getText("#summary", function(err, text) {
              console.log(text);
          });
      })
      .pause(3000)
      .back()
      .refresh()
      // .log('server')
      // .log('driver','ALL')
      .emit('countme', "cnt")
      .pause(1000)
      .title(function(err, res) {
          console.log('Title was: ' + res.value);
      })
      .session('delete')
      .endAll();
}


updateProfilePage();
// frontPageLogin();
