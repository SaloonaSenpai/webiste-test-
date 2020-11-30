$(document).ready(init_movies);

function init_movies(){
    var html=create_html("movie-template",movies);
    $("#movies").html(html);
}

function validate(){
    
    var name=$("#name").val();
    var name_error_message="";
    if(name.length<10){
        name_error_message="Error! Name has to be =>10";
        $("#name")[0].setCustomValidity(name_error_message);
        $("#name-feedback").text(name_error_message);
    }
    else{
       $("#name")[0].setCustomValidity(""); 
    }
    
    var message=$("#message").val();
    var message_error_message="";
    if(message.length<50){
        message_error_message="Error! Message has to be =>50";
        $("#message")[0].setCustomValidity(message_error_message);
        $("#message-feedback").text(message_error_message);
    }
    else{
       $("#message")[0].setCustomValidity(""); 
    }   
    
     

    //show the validation styling from Bootstrap (red, or green)
    $("form").addClass("was-validated");
}

function search(){
    var search_text=$("#search_box").val().toLowerCase();
    var search_result=[];
    for(var index in movies){
        var movie=movies[index];
        var movie_title=movie.title.toLowerCase();
        if(movie_title.search(search_text)!=-1)
            search_result.push(movie);
    }
    var html=create_html("movie-template",search_result);
    $("#movies").html(html);
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


function init(){
    var theme="light";
    if(localStorage.getItem("theme") != null){
        theme=localStorage.getItem("theme");
    }
    if(theme=="light"){
        light_theme();
    }
    else if(theme=="dark"){
        dark_theme();
    }
}

function light_theme(){
    $("body").css("background-color","white");
    $("div.movie_title").css("color","darkblue");
    $("nav").removeClass("navbar-dark")
            .addClass("navbar-light"); 
    
    localStorage.setItem("theme","light");
}

function dark_theme(){
    $("body").css("background-color","black");
    $("div.movie_title").css("color","white");
    $("nav").removeClass("navbar-light")
             .addClass("navbar-dark");
     
     localStorage.setItem("theme","dark");
}

function read_font(){
    //add a line that reads the font size
    var font_size=localStorage.getItem("font_size");
    //apply the font size to the paragraph as css
    $("p").css("font-size",font_size+"px");
}


function larger_font(){
    var font_size=parseInt($("p").css("font-size"));
    if(font_size<20){
        font_size+=1;
        $("p").css("font-size",font_size+"px");
    }
    //add a line that saves the font size to the local storage
    localStorage.setItem("font_size",font_size);
}

function smaller_font(){
    var font_size=parseInt($("p").css("font-size"));
    if(font_size>15){
        font_size-=1;
        $("p").css("font-size",font_size+"px");
    }
    //add a line that saves the font size to the local storage
    localStorage.setItem("font_size",font_size);
}


