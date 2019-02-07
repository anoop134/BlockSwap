function headerbg() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("header-bg");
    } else {
        $("header").removeClass("header-bg");
    }
}


$(window).scroll(function() {
    headerbg();
}); /* =========scroll End========= */


/* =========Ready Start========= */
$(document).ready(function() {
    /*======Header Toggle MEnu==========*/
    $("#menuShow").on('click', function(e) {
        $('#menubox').toggleClass('menu-slide');
    });
    $("#menuClose").on('click', function(e) {
        $('#menubox').toggleClass('menu-slide');
    });

    /*==========Night Mode JS====*/
    var checkmode = localStorage.getItem('modetype');
    if (checkmode == 'nightMode') {
        $('body').addClass('nightMode');
        $("#changeMode").prop('checked', true);
    }
    $('#changeMode').on('change', function() {
        var isChecked = $("#changeMode").is(":checked");
        if (isChecked == true) {
            $('body').addClass('nightMode');
            $("#changeMode").prop('checked', true);
            localStorage.setItem("modetype", "nightMode");
        } else {
            $('body').removeClass('nightMode');
            $("#changeMode").prop('checked', false);
            localStorage.removeItem("modetype");
        }
    });

}); /* =========Ready End========= */