$(document).ready(function () {

    var pageUrl = window.location.href.substr(window.location.href
            .lastIndexOf("/") + 1);
    $(".tabs").each(function () {
        if ($(this).attr("href") == pageUrl || $(this).attr("href") == '')
            $(this).addClass("active");
    });

    $('.unactive_card').click(function () {
        $('.unactive_card').removeClass('active_card');
        $(this).addClass('active_card');
    });
});
