$(document).ready(function () {

    //window.location.href = 'index.html'

    $('#menu').click(function () {
        if ($('#menu').hasClass('active')) {
            $('#menu').find('.item').each(function () {
                $(this).removeClass('active');
            });
            $('#menu').removeClass('active');
            $('body').css('overflow', 'initial');
            $('.icon-menu').removeClass('active');
        }
    });
    $('.icon-menu').click(function () {

        if ($('#menu').hasClass('active')) {
            $(this).removeClass('active');
            $('#menu').find('.item').each(function () {
                $(this).removeClass('active');
            });
            $('#menu').removeClass('active');
            $('body').css('overflow', 'initial');
        } else {
            $(this).addClass('active');
            $('#menu').find('.item').each(function () {
                $(this).addClass('active');
            });
            $('body').css('overflow', 'hidden');
            $('#menu').addClass('active');
        }
    });


    // animation au clic

    $(window).click(function (event) {

        const expl = document.createElement('span');
        expl.className = 'clickAnim';
        expl.style.top = `${event.pageY - 50}px`;
        expl.style.left = `${event.pageX - 60}px`;
        document.body.appendChild(expl);

        setTimeout(() => {
            expl.remove();
        }, 500)
    });

    $('.close').click(function () {
        $('.modal').css('display', 'none');
    });

    $('.card-content').click(function () {
        $('.modal').css('display', 'block');
    });

    //Display titles and content of blog posts

    $(".card-content").click(function () {
        const title = document.querySelector("#post-title");
        const content = document.querySelector("#post-content");

        if (document.querySelector("#page-title").innerText == "BLOG") {
            title.innerHTML = $(this.children)[1].innerHTML;
            content.innerHTML = $(this.children)[2].innerHTML;
        }

        if (document.querySelector("#page-title").innerText == "INICIATIVA") {
            title.innerHTML = $(this.children)[0].innerHTML;
            content.innerHTML = $(this.children)[1].innerHTML;
        }
    });

});