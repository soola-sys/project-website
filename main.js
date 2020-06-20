
/*let welcome = ["Welcome ", "to ", "the ", "page, "];
var name = prompt("What`s your name?");
var text = "";
for(var i = 0; i < 4; i++) {
text += welcome[i];
}
alert(text + name + "!");
*/



$(document).ready(function(){
  $("button").click(function(){
    $("h2").hide("slow", function(){
    });
  });
});

/*Counter Animation*/

let nCount = selector => {
  $(selector).each(function() {
    $(this)
    .animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: "swing",
      step: function(value){
        $(this).text(Math.ceil(value));
      }
    });
  });
};

let a = 0;
$(window).scroll(function() {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if(a == 0 && $(window).scrollTop() >= oTop){
    a++;
    nCount(".rect > h1");
  }
});

/*Sticky Navigation*/

let navbar = $(".navbar");

$(window).scroll(function() {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  }
  else {
    navbar.removeClass("sticky");
  }
});


/*Button*/

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
   //window.scrollTo(0, 0);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
