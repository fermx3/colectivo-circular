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
        //$('.modal').css('display', 'block');

        // Activate links to blogposts
        if (document.querySelector(".work")) {
            const urlRaw = $(this.children)[1].innerText;
            const urlNormal = urlRaw.normalize("NFD").replace(/\p{Diacritic}/gu, "");
            const urlLowerCase = urlNormal.toLowerCase();
            const urlNoSymbols = urlLowerCase.replace(/[^\w\s]/gi, '');
            const url = urlNoSymbols.split(' ').join('-');

            window.location = `https://colectivocircular.com/blog/${url}`;
        }

        //Display titles and content of blog posts
        const title = document.querySelector("#post-title");
        const content = document.querySelector("#post-content");
        
        // if (document.querySelector(".work")) {
        //     title.innerHTML = $(this.children)[1].innerHTML;
        //     content.innerHTML = $(this.children)[2].innerHTML;
        // }

        if (document.querySelector(".events")) {
            $('.modal').css('display', 'block');
            title.innerHTML = $(this.children)[0].innerHTML;
            content.innerHTML = $(this.children)[1].innerHTML;
        }
    });

    //Footer
	
	const thisYear = new Date().getFullYear();
	$('footer').html('<p>© COLECTIVO CIRCULAR BY U.S. MEAT. ' +  thisYear + '</p>');

});