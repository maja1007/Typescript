/*
Skapad av: Martina Jansson
Kurs:HT18 DT173G Datateknik GR (B), Webbutveckling III, 7,5 hp
*/
"use strict";
declare function require(name:string); // Make it possible to use require in TypeScript
var fs = require('fs');

//Class
class FilePublisher {
   filename: string;

   constructor(name: string) {
       this.filename = name;
   }

   showFile(): void {
       fs.readFile(this.filename, 'utf8', function(err, data) { // Read all of the file content
           if (err) throw err;

           let textmassa = data;
           let cleantext: string[];
          
           let reg:RegExp = /\W+/g; // Strip of new lines, blanks and dashes
           cleantext = textmassa.split(reg);   
          
           let clean = cleantext;
           let count = {};
          
           for(let i of clean){  // For every element in array clean
                  count[i] = (count[i]||0) + 1;
           //    count[i] = count[i] != undefined ? count[i] + 1 : 1; // If object undefined => define and set counter to 1 otherwise increase the counter
          
               if(count[i] != undefined){
                   count[i] = count[i]+1;
               } else {
                   count[i] = 1;
               }
          
           }
          
           let unsorted = count;
           let sorted = [];
           for (let key in unsorted) sorted.push([key, unsorted[key]]); // Copy the objects to an associative array
           sorted.sort(function (a, b) { // Sort the array, (Chrome V8)less than 10 elements => insertion sort otherwise quicksort
               return a[1] - b[1]; // Make the sort based on the count 
           });

           sorted.reverse(); // Reverse the sorted array to descending order

           console.log(sorted.slice(0,10)); // Show the 10 highest values

       }); 
  
   }
}

let obj = new FilePublisher("hitch.txt");
obj.showFile();