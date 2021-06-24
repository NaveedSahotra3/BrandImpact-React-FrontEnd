jQuery(document).ready(function () {
    jQuery('#demo2').skdslider({
        slideSelector: '.slide',
        delay: 3000,
        animationSpeed: 2000,
        showNextPrev: true,
        showPlayButton: false,
        autoSlide: true,
        animationType: 'fading'
    });
});

$(window).on('load', function () {
    $('.hover_bkgr_fricc').show();
});
$('.popupCloseButton').click(function () {
    $('.hover_bkgr_fricc').hide();
    //$('.hover_bkgr_vdo').show();

    $('.hover_bkgr_nomni').show();
});

$('.apply_now').click(function () {
    $('.hover_bkgr_fricc').hide();
    $('.hover_bkgr_nomni').show();
});

/*$('.popupCloseButton_vdo').click(function(){
    $('.hover_bkgr_vdo').hide();
    $('.hover_bkgr_nomni').show();
});*/

/*$('#nominateBtn').click(function (){
    $('.hover_bkgr_vdo').hide();
    $('.hover_bkgr_nomni').show();
});*/

$('.popupCloseButton_nomni').click(function () {
    $('.hover_bkgr_nomni').hide();
});

$('#savenomi').click(function () {
    var name = $('#name').val();
    var mobile = $('#mobile').val();
    var email = $('#email').val();
    var executive = $('#executive_name').val();
    var url = 'send_mail.html';
    if (name == '') {
        alert('Please enter Name');
        ('#name').focus();
        return false;
    }
    if (mobile == '') {
        alert('Please enter Mobile');
        $('#mobile').focus();
        return false;
    }
    if (email == '') {
        alert('Please enter Email');
        $('#email').focus();
        return false;
    }
    $.ajax({
        type: 'POST',
        url: url,
        data: 'action=sendm&nam=' + name + '&mob=' + mobile + '&email=' + email + '&executive=' + executive,
        cache: false,
        dataType: 'json',
        beforeSend: function () {

        },
        success: function (html) {
            if (html.code == '200') {
                $("#msg").addClass('alert-success');
                $("#msg").html(html.htm);
                $('#msg').fadeIn().delay(10000).fadeOut();
                setTimeout(function () { $('.hover_bkgr_nomni').hide(); }, 5000);
            }
        }
    });
});

$('form#contact-us').submit(function () {
    var form = $(this);
    var str = $(this).serialize();
    var action = $(this).attr('action');
    $.ajax({
        type: "POST",
        url: action,
        data: str,

        success: function (html) {
            form.html('<h4>Your message has been sent. Thank you!</h4>').css('opacity', '1');
        }
    });
    return false;
});


$('#awards').click(function () {
    window.open('events.html', '_blank');
    //			window.location.href="/magazines.html";
});

$('#tv').click(function () {
    window.open('tv-series.html', '_blank');
});

$('#magazine').click(function () {
    window.open('magazines.html', '_blank');
    //			window.location.href="/magazines.html";
});
$('#our_team').click(function () {
    window.open('team.html', '_blank');
});