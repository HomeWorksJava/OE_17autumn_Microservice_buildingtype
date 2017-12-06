//var shouter = new ko.subscribable();
var ViewModelOrganizer = (function () {
    var self = this;
    self.page = ko.observable("loginPage");
    self.LoginPageViewModel = new LoginPageViewModel();
    self.MainPageViewModel = new MainPageViewModel();
    self.EditPageViewModel = new EditPageViewModel();

    self.goMainPage = function () {
        self.MainPageViewModel.loadRecords();
    };
    self.goToEdit = function () {       
        var selectedtopicid = self.MainPageViewModel.selectedid();        
        self.EditPageViewModel.loadrecord(selectedtopicid);
    };
    self.goToMyTests = function () {
        self.MyTestsViewModel.GetCategories();
    };
    self.logout = function () {
        document.location.hash = "loginPage";
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
    };

    window.onhashchange = function () {
        //alert(window.location.hash);
        //window.location.hash = "no-back-button";
    };
    $(window).on('hashchange', routePage);
    function routePage() {
        var pageName = (window.location.hash) ? window.location.hash : "#loginPage";        
        if (!hasusername()) {
            self.page("loginPage");
            return;
        }
        switch (pageName) {
            case '#loginPage':
                self.page("loginPage");
                break;
            case '#mainpage':
                self.page("mainpage");
                self.goMainPage();
                break;
            case '#editpage':
                self.page("editpage");
                self.goToEdit();
                break;
        }
    }
})();
ko.applyBindings(ViewModelOrganizer);

