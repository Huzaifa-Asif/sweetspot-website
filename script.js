window.onload = () => {
    setTimeout(() => {
        $("#body").removeClass("d-none")
        $(".loading").addClass("d-none")
        AOS.init();
    }, 999);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showSmSearchField()
{
    $("#search-field-sm").removeClass("d-none").addClass("d-flex")
}
function hideSmSearchField()
{
    $("#search-field-sm").addClass("d-none").removeClass("d-flex")
}

function switchTo(step) {
    console.log(step, "step")
    switch (step) {
        case 'step1':
            $("#step1").removeClass("d-none")
            $("#step2").addClass("d-none")
            $("#step3").addClass("d-none")            
            break;
        case 'step2':
            $("#step1").addClass("d-none")
            $("#step2").removeClass("d-none")
            $("#step3").addClass("d-none")              
            break;
        case 'step3':
            $("#step1").addClass("d-none")
            $("#step2").addClass("d-none")
            $("#step3").removeClass("d-none")                          
            break;    
    }
}


let position = -1,
    h = $(window).height(),
    w = $(window).width(),
    slides = $("#slider"),
    scroll_ = 0

function next(id) {
if((slides.scrollLeft() == position && position > 0)) {
    scroll_ = -w
}
scroll_ += w/1.50
slides.animate({
    scrollLeft: scroll_ + 'px'
}, 499) 
position = slides.scrollLeft()
}

function previous(id) {
if (scroll_ >= 0) {
    scroll_ -= w/1.50
    slides.animate({
        scrollLeft: scroll_ + 'px'
    }, 499) 
    position = slides.scrollLeft()
}
}
