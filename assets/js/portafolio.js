/*var newProyect = {
    title: 'Train Schedule',
    des: 'A web train schedule application that host arrival and departure data, this app was build using Firebase,jQuery, moment.js and ',
    img:'train.jpg',
    tec: ['fa-html5','fa-css3-alt','fa-js'],
    gitHub: 'https://github.com/edgartopete/topics',
    sample: 'https://edgartopete.github.io/topics/'
}


database.ref("/portafolio").push(newProyect);   */
$(document).ready(function() {
 //to show data saved
database.ref("/portafolio").on("child_added", function (childSnapshot) {

    var title = childSnapshot.val().title;
    var des = childSnapshot.val().des;
    var tec = childSnapshot.val().tec;
    var gitHub = childSnapshot.val().gitHub;
    var sample= childSnapshot.val().sample;
    var img=childSnapshot.val().img;

    var newCard = $("<div>");
        newCard.addClass("col s12 m6");
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
            console.log( '<i class="fab '+ value +' fa-2x"></i>');
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
