function LoginPageViewModel() {
    var self = this;
    self.user = ko.observable("");
    self.pass = ko.observable("");
    //self.page = ko.observable();
    self.SuccesLogin = function () {
        sessionStorage.setItem("username", self.user());
        sessionStorage.setItem("password", self.pass());        
        document.location.hash = "mainpage";        
    }
    //self.page.subscribe(function (newValue) {
    //    shouter.notifySubscribers(newValue, "ChangePage");
    //});
    self.Login = function () {
        self.SuccesLogin();
        return;
        if (self.user() == "" || self.pass() == "") {
            $("#loginPageErrorContent").text("Adatok nem megfelelőek.");
            //$(".alert").alert();            
            return;
        }
        BASettings(self.user(), self.pass());
        $.ajax
          ({
              type: "POST",
              url: "http://212.237.62.182:54715/api/test/Login/",
              dataType: 'json',
              async: true,
              data: {
                  username: self.user(),
                  password: self.pass()
              },
              cache: false,
              timeout: 10000,
              crossDomain: true,
              beforeSend: function (xhr) {
                  xhr.setRequestHeader('Authorization', BASettings.getHashNumber());
                  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                  //xhr.setRequestHeader('AppVersion', $("#version").text());
              },
              success: function (data) {
                  if (data == true) {
                      self.SuccesLogin();
                  } else {
                      //$(".alert").alert();
                      $("#loginPageErrorContent").text("Jelszó és felhasználónév nem helyes.");
                  }
              }
          }).fail(function (msg) {
              BASettings.Reset();
              console.log(msg);
              $("#loginPageErrorContent").text("Hiba történt.");
          });
    }
    /*function form_validate(attr_id) {
        var result = true;
        $('#loginform').validator('validate');
        $('#loginform .form-group').each(function () {
            if ($(this).hasClass('has-error')) {
                result = false;
                return false;
            }
        });
        return result;
    }*/
    $('#submitform').on('click', function (e) {
        //$('#loginform').validator('validate');
        if (form_validate('loginform'))
            self.Login();
    });
}