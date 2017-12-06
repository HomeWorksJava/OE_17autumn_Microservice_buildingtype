
﻿function MainPageViewModel() {
    var self = this;
    self.locationbuildings = ko.observableArray();
    self.selectedid = ko.observable();
    self.resultOverView = function (data) {
        for (var i = 0; i < data.length; i++) {
        self.locationbuildings.push(
            //new SingleRecord(data[i].locationBuildingid,data[i].buildingName,data[i].locationid,data[i].buildingTypeid,data[i].buildingSize)
              new SingleRecord(
                data[i].locationBuildingid,
                data[i].buildingName,
                data[i].locationid,
                data[i].buildingTypeid,
                data[i].buildingSize)
                );
        }
        
    }
    self.delete = function(e) {        
        $.ajax({
            type: "GET",
            url: "http://212.237.62.182:8080/halo/hello/remove/"+e.locationBuildingid,
            dataType: 'json',
            async: true,
            //data: '{}',
            cache: false,
            timeout: 10000,
            crossDomain: true,
             beforeSend: function (xhr) {
            //xhr.setRequestHeader('Authorization', BASettings.getHashNumber());
            //xhr.setRequestHeader('UUID', BASettings.UUID());
            //xhr.setRequestHeader('AppVersion', $("#version").text());
            },
            success: function (data) {
                self.locationbuildings.remove(e);
            }
        }).fail(function (msg) {
            console.log(msg);
        });
        //self.locationbuildings.remove(e);
    }
    self.edit = function(e) {
        self.selectedid(e);
        document.location.hash = "editpage";
    }
    self.addnew = function() {
        self.selectedid(null);
        document.location.hash = "editpage";
    }
    self.loadRecords = function () {        
        self.locationbuildings.removeAll();
        self.selectedid(null);
        $.ajax({
            type: "GET",
            url: "http://212.237.62.182:8080/halo/hello/All",
            dataType: 'json',
            async: true,
            //data: '{}',
            cache: false,
            timeout: 10000,
            crossDomain: true,
             beforeSend: function (xhr) {
            //xhr.setRequestHeader('Authorization', BASettings.getHashNumber());
            //xhr.setRequestHeader('UUID', BASettings.UUID());
            //xhr.setRequestHeader('AppVersion', $("#version").text());
            },
            success: function (data) {
                self.resultOverView(data);
            }
        }).fail(function (msg) {
            console.log(msg);
        });
    }
}