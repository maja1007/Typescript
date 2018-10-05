/*
Skapad av: Martina Jansson
Kurs:HT18 DT173G Datateknik GR (B), Webbutveckling III, 7,5 hp
*/
"use strict";
var fs = require('fs');
//Class
var FilePublisher = /** @class */ (function () {
    function FilePublisher(name) {
        this.filename = name;
    }
    FilePublisher.prototype.showFile = function () {
        fs.readFile(this.filename, 'utf8', function (err, data) {
            if (err)
                throw err;
            var textmassa = data;
            var cleantext;
            var reg = /\W+/g; // Strip of new lines, blanks and dashes
            cleantext = textmassa.split(reg);
            var clean = cleantext;
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) { // For every element in array clean
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
                //    count[i] = count[i] != undefined ? count[i] + 1 : 1; // If object undefined => define and set counter to 1 otherwise increase the counter
                if (count[i] != undefined) {
                    count[i] = count[i] + 1;
                }
                else {
                    count[i] = 1;
                }
            }
            var unsorted = count;
            var sorted = [];
            for (var key in unsorted)
                sorted.push([key, unsorted[key]]); // Copy the objects to an associative array
            sorted.sort(function (a, b) {
                return a[1] - b[1]; // Make the sort based on the count 
            });
            sorted.reverse(); // Reverse the sorted array to descending order
            console.log(sorted.slice(0, 10)); // Show the 4 highest values
            /* let myContainer = <HTMLElement> document.getElementById("demo");
              myContainer.innerHTML = "<h1>" + data + "</h1>";*/
        });
    };
    return FilePublisher;
}());
var obj = new FilePublisher("hitch.txt");
obj.showFile();
