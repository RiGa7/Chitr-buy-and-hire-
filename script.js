window.addEventListener('scroll', function () {
    var navbar = document.querySelector('#navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});

$(".eachRow img").on("mouseover",function(){
    var self = $(this);
    self.addClass("zoom");
    // setTimeout(function(){
    //     self.removeClass("zoom");
    // }, 300);
})

$("button").on("mouseover", function () {
    var self = $(this);

    self.addClass("red");

    setTimeout(function () {
        self.removeClass("red");
    }, 500);
});

