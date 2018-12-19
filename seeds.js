// var mongoose = require("mongoose");
// var feeds = require("./models/feeds");
// var Comment   = require("./models/comment");

// var data = [
//     // {
//     //     name: "Cloud's Rest", 
//     //     image: "https://pixabay.com/get/ec3cb00a2ff21c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Desert Mesa", 
//     //     image: "https://pixabay.com/get/e83db1082df7023ed1584d05fb1d4e97e07ee3d21cac104491f5c17ca2e5bcb9_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Canyon Floor", 
//     //     image: "https://pixabay.com/get/ea36b30d2ffc1c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Cloud's Rest", 
//     //     image: "https://pixabay.com/get/ec3cb00a2ff21c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Desert Mesa", 
//     //     image: "https://pixabay.com/get/e83db1082df7023ed1584d05fb1d4e97e07ee3d21cac104491f5c17ca2e5bcb9_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Canyon Floor", 
//     //     image: "https://pixabay.com/get/ea36b30d2ffc1c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Cloud's Rest", 
//     //     image: "https://pixabay.com/get/ec3cb00a2ff21c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Desert Mesa", 
//     //     image: "https://pixabay.com/get/e83db1082df7023ed1584d05fb1d4e97e07ee3d21cac104491f5c17ca2e5bcb9_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Canyon Floor", 
//     //     image: "https://pixabay.com/get/ea36b30d2ffc1c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Cloud's Rest", 
//     //     image: "https://pixabay.com/get/ec3cb00a2ff21c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Desert Mesa", 
//     //     image: "https://pixabay.com/get/e83db1082df7023ed1584d05fb1d4e97e07ee3d21cac104491f5c17ca2e5bcb9_340.jpg",
//     //     description: "blah blah blah"
//     // },
//     // {
//     //     name: "Canyon Floor", 
//     //     image: "https://pixabay.com/get/ea36b30d2ffc1c22d2524518b7444795ea76e5d004b0144590f0c47cafe4b4_340.jpg",
//     //     description: "blah blah blah"
//     // }
// ]

// function seedDB(){
//   //Remove all feeds
//   feeds.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed feeds!");
//          //add a few feeds
//         data.forEach(function(seed){
//             feeds.create(seed, function(err, feeds){
//                 if(err){
//                     console.log(err)
//                 } else {
//                     console.log("added a feeds");
//                     //create a comment
//                     Comment.create(
//                         {
//                             text: "This place is great, but I wish there was internet",
//                             author: "Homer"
//                         }, function(err, comment){
//                             if(err){
//                                 console.log(err);
//                             } else {
//                                 feeds.comments.push(comment);
//                                 feeds.save();
//                                 console.log("Created new comment");
//                             }
//                         });
//                 }
//             });
//         });
//     }); 
//     //add a few comments
// }

// module.exports = seedDB;
