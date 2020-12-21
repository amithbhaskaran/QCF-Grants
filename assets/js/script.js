$(document).ready(function () {
    $(".navigation-links li a").click(function () {
        $getElement = $(this).attr("href");
        // checking if the section exists using length function
        if ($($getElement).length) {
            // storing top position
            $getOffset = $($getElement).offset().top;
            $("html, body").animate({
                scrollTop: $getOffset
            }, 1000)
        }
    });
});
