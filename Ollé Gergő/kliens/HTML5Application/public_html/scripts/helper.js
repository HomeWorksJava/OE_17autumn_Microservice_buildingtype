$(document).ready(function () {
    document.location.hash = "";
    $(document).ajaxStart(function (e) {        
        $(".modal").show();
    }).ajaxStop(function () {
        $(".modal").hide('slow');
    }).ajaxSend(function (e, options) {
        var u = sessionStorage.getItem("username");        
        if (!hasusername())
            options.abort();
    }).ajaxError(function (event, request, settings) {
        console.log("ajaxerror");
    });
    window.onbeforeunload = function () {        
        return true;
    };
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });
});
function hasusername() {
    var u = sessionStorage.getItem("username");
    if (u == "undefined" || u == null || u == "")
        return false;
    return true;
}
function form_validate(attr) {
        var result = true;
        $('#'+attr).validator('validate');
        $('#'+attr+' .form-group').each(function () {
            if ($(this).hasClass('has-error')) {
                result = false;
                return false;
            }
        });
        return result;
    }