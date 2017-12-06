function SingleRecord(id, name, location,type,size) {
    var self = this;
    self.locationBuildingid = id;
    self.buildingName = ko.observable(name);
    self.buildingTypeid = ko.observable(type);
    self.locationid = ko.observable(location);
    self.buildingSize = ko.observable(size);
}
﻿function EditPageViewModel() {
    var self = this;
    self.record = ko.observable();
    self.id = ko.observable();
    self.eredmeny = ko.observable();

    self.GetRecordResult = function (data) {
        self.record(new SingleRecord(
                data[i].locationBuildingid,
                data[i].buildingName,
                data[i].locationid,
                data[i].buildingTypeid,
                data[i].buildingSize)
                );
    };

    self.loadrecord = function (selected) {
        if (selected === null) {
            self.record(new SingleRecord(0, "", 0,0,0 ));
            self.id(0);
        } else {
            self.record(new SingleRecord(
                    selected.locationBuildingid, 
                    selected.buildingName(),
                    selected.locationid(), 
                    selected.buildingTypeid(), 
                    selected.buildingSize()));
                    self.id(selected.locationBuildingid);
        }
    };
    self.Edit = function () {
        alert("ed");
         var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    self.eredmeny("sikere adatfelvitel"+xhttp.responseText);
                } else {
                    self.eredmeny("jajj, nem sikerült, wtf van " + msg.toString());
                }
            }
        };
        xhttp.onerror = function () {
            self.eredmeny("jajj, nem sikerült, wtf van " + msg.toString());
        };
        xhttp.open("POST", "http://212.237.62.182:8080/halo/hello/edit/", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(ko.toJSON(self.record()));
        /*
        return;
        $.ajax({
            type: "POST",
            url: "http://212.237.62.182:54715/api/test/TestOver/",
            dataType: 'json',
            async: true,
            data: {
                Record: ko.toJSON(self.record())
            },
            cache: false,
            timeout: 15000,
            crossDomain: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', BASettings.getHashNumber());
            },
            success: function (data) {
                console.log(data);
                self.eredmeny("sikeres editálás");
            }
        }).fail(function (msg) {
            console.log(msg);
            self.eredmeny("jajj, nem sikerült, wtf van " + msg.toString());
        });*/
    };
    self.addNewRecord = function () {
        //console.log(ko.toJSON(self.record()));
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    self.eredmeny("sikere adatfelvitel"+xhttp.responseText);
                } else {
                    self.eredmeny("jajj, nem sikerült, wtf van " + xhttp.responseText);
                }
            }
        };
        xhttp.onerror = function () {
            self.eredmeny("jajj, nem sikerült, wtf van " +  xhttp.responseText);
        };
        xhttp.open("POST", "http://212.237.62.182:8080/halo/hello/add/", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        //xhttp.setRequestHeader("Origin ", "212.237.62.182");
        xhttp.send(ko.toJSON(self.record()));
        /*return;
        $.ajax({
            type: "POST",
            url: "http://212.237.62.182:8080/hello/add/",
            dataType: 'json',
            contentType: "application/json",
            async: true,
            data: {
                Record: ko.toJSON(self.record())
            },
            cache: false,
            timeout: 15000,
            crossDomain: true,
            beforeSend: function (xhr) {
                //xhr.setRequestHeader('Authorization', BASettings.getHashNumber());
            },
            success: function (data) {
                console.log(data);
                self.eredmeny("sikere adatfelvitel");
            }
        }).fail(function (msg) {
            console.log(msg);
            self.eredmeny("jajj, nem sikerült, wtf van " + msg.toString());
        });
        */
    };
    self.formclicked = function () {
        if (form_validate('editform'))
            if (self.id() !== 0)
                self.Edit();
            else
                self.addNewRecord();
    }
//    $('#submiteditform').on('click', function (e) {
//        console.log("v");
//        if (form_validate('editform'))
//            if(self.id() !== 0)
//                self.Edit();
//            else
//                self.addNewRecord();
//    });
}