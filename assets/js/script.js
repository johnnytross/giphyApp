//topics array that is searched through using the renderButtons function
const topics = ["FX Atlanta","The Orville","Star Wars","dogs","cats","The Avengers","The Punisher","Full Metal Alchemist","one punch man"];

const api_key = "XdY3pG2DioYFE7kQzAQvCBXVIhnfOS8f"

var search;

// $(".images").hide();


//giphy url from giphy-api classwork assignment
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=XdY3pG2DioYFE7kQzAQvCBXVIhnfOS8f";


//call the function render buttons
renderButtons();

//create the function render buttons
function renderButtons() {

    //select the lead class in HTML and set it to empty. Then generate a button using the for loop to cycle through the array
    $(".lead").empty();
    for (let i = 0; i < topics.length; i++) {
        const btn = $("<button>");
        btn.addClass("topic");
        btn.text(topics[i]);
        $(".lead").append(btn);
        btn.val(topics[i]);
        
    }
}


// // test
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
//     console.log(response.data[0].images.fixed_height.url);
//     //make a loop to create the pictures inside of a function, and make the pictures clickable. 
//     // for (var i = 0; i < 10; i++){
//     //     var pause = response.data[i].images.fixed_height_still.url;
//     //     $(".images").append("<img data-pause='" + pause + "' src='" + pause + "'>");
//     // }

//     for (var i = 0; i < 10; i++){
//         var play = response.data[i].images.fixed_height.url;
//         $(".images").append("<img data-play='" + play + "' src='" + play + "'>");
//     }
// // var play = response.data[0].images.fixed_height.url;
// //         var pause = response.data[0].images.fixed_height_still.url;
// //         var play2 = response.data[1].images.fixed_height.url;
// //         var play3 = response.data[2].images.fixed_height.url;
// //         var play4 = response.data[3].images.fixed_height.url;
// //         var play5 = response.data[4].images.fixed_height.url;
// //         var play6 = response.data[5].images.fixed_height.url;
// //         var play7 = response.data[6].images.fixed_height.url;
// //         var play8 = response.data[7].images.fixed_height.url;
// //         var play9 = response.data[8].images.fixed_height.url;
// //         var play10 = response.data[9].images.fixed_height.url;
//         // var play11 = response.data[10].images.fixed_height.url; //breaks the code (no data[10] so it displays an error instead.)
    
//         // Data.response();
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play2 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play3 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play4 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play5 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play6 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play7 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play8 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play9 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play10 + "'>");
//         // $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play11 + "'>"); 
// //         //breaks the code (no data[10] so it displays an error instead.)
// })


//function to use get method and create pictures
function grabImages(){
//     $(".images").show();
//     // console.log("Topics" + renderButtons(topics)); 
//     console.log(val); 
//     var queryURL = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${api_key}&limit=10`; 
    
    
// //Get data from giphy API with ajax
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         // console.log(response);
//         console.log("Response: " + response.data[0].images.fixed_height.url);
//         // console.log(this);
    
//         //Create initial 10 pictures on click 
//         for (var i = 0; i < response.data.length; i++){
//             var pause = response.data[i].images.fixed_height_still.url;
//             var play = response.data[i].images.fixed_height.url;
//             $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play + "'>");
//         }

//         //To do: make a on click function that contains the if/else if/else statement below. Also make the pictures clickable. 


//         // // if and if/else statement that determines which picture is already in the DOM, and then a for loop to swap it out AND add the new images too
//         if($(".images").attr(src == play)){
//             for (var i = 0; i < response.data.length; i++){
//                 $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + pause + "'>");
//             }
//         }else if($(".images").attr(src == pause)){
//             var play = response.data[0].images.fixed_height.url;
//             $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play + "'>");
//         }   else {
//                 $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + pause + "'>");
//         }
        
        
//     })
}

// On click fucntion that calls another function that uses the get method and creates pictures
$(".topic").on("click", function() {
    console.log(this);
    let val = $(this).attr("value");
    
    // console.log(val);

    
    // grabImages();
    // return val;

    $(".images").empty();
    $(".images").show();
    // console.log("Topics" + renderButtons(topics)); 
    console.log(val); 
    // console.log($('.images').attr('src'));
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${api_key}&limit=10`; 
    
    
//Get data from giphy API with ajax
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // console.log(response);
        console.log("Response: " + response.data[0].images.fixed_height.url);
        console.log(response.data[0].rating);
        // console.log(this);
    
        //Create initial 10 pictures on click 
        for (var i = 0; i < response.data.length; i++){
            var pause = response.data[i].images.fixed_height_still.url;
            var play = response.data[i].images.fixed_height.url;
            // var rating = ;
            $(".images").append(`<img data-play='${play}' data-pause='${pause}' src='${play}' class='images'>
                
            `);

        }
        $(".images").on("click", function() {
            console.log(this);
            console.log($(".images").attr('src'));
            // if($(".images").attr('src') == play){ 
            //     for (var i = 0; i < response.data.length; i++){
            //         var pause = response.data[i].images.fixed_height_still.url;
            //         var play = response.data[i].images.fixed_height.url;
            //         $(".images").html("<img data-play='" + play + "' data-pause='" + pause + "' src='" + pause + "'>");
            //     }
            // }else if($(".images").attr('src') == pause){
            //     for (var i = 0; i < response.data.length; i++){
            //         $(".images").html("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play + "'>");
            //     }
            // }   else {
            //     console.log(response.data.length);
            //     for (var i = 0; i < response.data.length; i++){
            //         $(".images").html("<img data-play='" + play + "' data-pause='" + pause + "' src='" + pause + "'>");
            //     }
            // }
        });


        //To do: make a on click function that contains the if/else if/else statement below. Also make the pictures clickable. 


        // // if and if/else statement that determines which picture is already in the DOM, and then a for loop to swap it out AND add the new images too
        // if($(".images").attr(src == play)){
        //     for (var i = 0; i < response.data.length; i++){
        //         $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + pause + "'>");
        //     }
        // }else if($(".images").attr(src == pause)){
        //     var play = response.data[0].images.fixed_height.url;
        //     $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + play + "'>");
        // }   else {
        //         $(".images").append("<img data-play='" + play + "' data-pause='" + pause + "' src='" + pause + "'>");
        // }
        
        
    })
});


