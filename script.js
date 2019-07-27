let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 567,
        rating: 5.8
    },
    {
        title: "Episode # 01 - Kapil Sharma  Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 8576,
        rating: 6.6
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.7
    },

    {
        title: "Food Fusion",
        lengthInMinutes: 14,
        category: "cooking",
        uploadDate: new Date("01-06-2019"),
        tags: "briyani",
        features: ["LIVE", "280°", "HDR"],
        viewCount: 698,
        rating: 2.3

    },
    {
        title: "Train to Busan",
        lengthInMinutes: 2,
        category: "Entertainment",
        uploadDate: new Date("10-07-2015"),
        tags: "thirll, horror",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 67833,
        rating: 7.2
    },

    {
        title: " Promo # 15 - Cheekh",
        lengthInMinutes: 1,
        category: "Entertainment",
        uploadDate: new Date("27-07-2019"),
        tags: "emotional, funny",
        features: ["purchased", "HDR"],
        viewCount: 1421,
        rating: 8.5
    },
    {
        title: "The loin King",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 765448,
        rating: 9.7
    },
    {
        title: "Episode # 34 - nody",
        lengthInMinutes: 30,
        category: "Entertainment",
        uploadDate: new Date("27-11-2013"),
        tags: "funny,lovely",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 35876,
        rating: 6.4
    },
    {
        title: " Part # 4 Story  - HOLY PROPHET (P.B.U.H)",
        lengthInMinutes: 20,
        category: "Knowledgeable",
        uploadDate: new Date("31-05-2001"),
        tags: "Historical",
        features: [" Life if HOLY PROPHET(P.B.U.H)/zakir naik", "standered"],
        viewCount: 678564,
        rating: 8.9
    },
    {
        title: "Global Warming  ",
        lengthInMinutes: 60,
        category: "information",
        uploadDate: new Date("26-07-2019"),
        tags: "information",
        features: ["Dil Ki 3 Kefiyaat/Mulana Tariq Jameel", "HD"],
        viewCount: 672381,
        rating: 6.5
    },
];
/* FOR EACH LOOPS QUESTION # 1

videos.forEach(function (element) {
    console.log( element )//"title : " + videos .title) + "\n" + "minutes : " + videos.lengthInMinutes + "\n" + "category: " + videos.category + "\n" + "uploaded on : " + videos.uploadDate + "\n" + "views : " + video.viewCount + "\n" + "rating : " + videos.rating );

});

 BY FOR LOOP
 QUESTION # 1
for (let i = 0; i < videos.length; i++) {
    console.log("title : " + videos[i].title + "\n" + "minutes : " + videos[i].lengthInMinutes + "\n" + "category: " + videos[i].category + "\n" + "uploaded on : " + videos[i].uploadDate  + "\n" + "views : " + videos[i].viewCount + "\n" + "rating : " + videos[i].rating);
}
*/
//BY FOR EACH LOOPS  

//lengthInMinutes.forEach(function (element) {
//console.log(element)
//});


/*

BY LOOPS
  QUESTION # 2

 for short videos which is less than 3

for(let i = 0 ; i < videos.length; i++){
   if (videos[i].lengthInMinutes < 3){
       console.log(videos[i].lengthInMinutes && videos[i].title);
}
}

QUESTION # 3

// for short videos which is greater than 20

for(let i = 0 ; i < videos.length; i++){
   if (videos[i].lengthInMinutes > 20){
       console.log(videos[i].lengthInMinutes && videos[i].title);
}
}


QUESTION # 4
// for medium videos
for (let i = 0; i < videos.length; i++) {
if(videos[i].lengthInMinutes > 3 && videos[i].lengthInMinutes < 20){
    console.log(videos[i].lengthInMinutes && videos[i].title);
}

}

QUESTION # 5


 //for longest videos
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 50) {
        console.log(videos[i].lengthInMinutes && videos[i].title);
    }
}


 // Nahi aaraha ?


 QUESTION # 6

for (let i = 0; i < videos.length; i++) {
    if (videos[i].category == "Education") {
        console.log(videos[i].category && videos[i].title);
    }
}

nahi aaraha hai ??

QUESTION # 7

for (let i = 0; i < videos.length; i++) {
    if (videos[i].tags == "javascript, loops, web development") {
        console.log(videos[i].tags && videos[i].title);
    }
}
QUESTION # 8

nahi aaraha hai ??

for (let i = 0; i < videos.length; i++) {
    if (videos[i].features == "HD") {
        console.log(videos[i].features && videos[i].title);
    }
}
let z = new Date();

document.write(z.getDate());


for (let i = 0; i < videos.length; i++) {
    if (videos[i].uploadDate == videos[i].uploadDate.getFullYear ) {
        console.log(videos[i].uploadDate && videos[i].title);
    }
}
*/


