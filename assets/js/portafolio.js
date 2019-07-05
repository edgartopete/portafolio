/*var newProyect = {
    title: 'Mambo (Bootcamp Project 2)',
    des: 'A web app to connect clients with service providers, in thes version the app will let you create your stores and services. Also the user can send comment to the stores services, this app was build using Express,MySQL,Handlebars,jQuery and ',
    img:'burger.png',
    tec: ['fa-node-js','fas fa-database'],
    gitHub: 'https://github.com/edgartopete/mamboV2.1',
    sample: 'https://floating-oasis-25410.herokuapp.com/'
}


database.ref("/portafolio").push(newProyect);  */
$(document).ready(function() {

    database.ref("/portafolio").once("value", function (snap) {
        //console.log("initial data loaded!", snap.numChildren());
        var docHeigth=$(document).height()+700;
        $('html').attr('style', 'height:'+  docHeigth+'px');
        $('body').attr('style', 'height:'+ docHeigth+'px');
        
        $('body').attr('class','bg');
       
       
       
    }); 
   
 //to show data saved
database.ref("/portafolio").on("child_added", function (childSnapshot) {

    var title = childSnapshot.val().title;
    var des = childSnapshot.val().des;
    var tec = childSnapshot.val().tec;
    var gitHub = childSnapshot.val().gitHub;
    var sample= childSnapshot.val().sample;
    var img=childSnapshot.val().img;

    var newCard = $("<div>");
        newCard.addClass("col s12 m4");
    var divCard =$("<div>");
        divCard.addClass("card");        
    var divImg = $("<div>");
        divImg.addClass("card-image");
    var cardImg = $("<img>");
        cardImg.attr("src", "assets/img/"+img);
    var cardAgit= $("<a class='btn-floating halfway-fab waves-effect waves-light grey'><i class='fab fa-github fa-2x'></i></a>");
        cardAgit.attr("href",gitHub);
        cardAgit.attr("target","_blank");
    var cardAweb= $("<a class='btn-floating halfway-fab waves-effect waves-light grey'><i class='fab fa-chrome fa-2x'></i></a>");
        cardAweb.attr("href",sample);
        cardAweb.attr("target","_blank");
    var cardCont = $("<div>");
        cardCont.addClass("card-content");
    var span= $("<span>");
        span.addClass("card-title");
        span.text(title);
    var p = $("<p>")
        p.text(des);
    
    cardCont.prepend(p);
    if(tec.length>0){
        $.each(tec, function( index, value ) {
            p.append('<i class="fab '+ value +' fa-2x"></i>');
          });
    }

    cardCont.prepend(span);
    divImg.prepend(cardAgit);
    divImg.prepend(cardAweb);
    divImg.prepend(cardImg);
    divCard.prepend(cardCont);
    divCard.prepend(divImg);
    newCard.prepend(divCard);

    $("#area").append(newCard);
    
});

});
