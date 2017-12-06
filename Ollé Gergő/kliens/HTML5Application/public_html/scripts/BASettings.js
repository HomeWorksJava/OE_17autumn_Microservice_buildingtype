var BASettings = (function BASettingsInner() {
    var self = this;
    var completehash = "";
    var IP = "";
    var deviceUUID = "";
    var Version = "";
    var Token = "";
    var password = "";
    function DoReset() {
        completehash = "";
        //deviceUUID = "";
        //Version = "";
        Token = "";
    //    localStorage.setItem("Token", "");
    }
    function IP_fn() { return IP; };
    function hash_fn() { return completehash; };
    function UUID_fn() { return btoa(device.uuid); };
    function getToken_fn() { return Token; };
    function getPwd_fn() { return password; };
    function setToken_fn(toki) { Token = btoa(toki); }
    function IP_set_fn(p) { IP = p; }
    function BASettings(user, pass) {
        var tok = user + ':' + pass;
        password = pass;
        var hash = btoa(tok);
        completehash = "Basic " + hash;
    }
    BASettings.getHashNumber = hash_fn;
    BASettings.UUID = UUID_fn;
    BASettings.getToken = getToken_fn;
    BASettings.setToken = setToken_fn;
    BASettings.getPwd = getPwd_fn;
    BASettings.Reset = DoReset;
    BASettings.getIP = IP_fn;
    BASettings.setIP = IP_set_fn;
    return BASettings;
})();