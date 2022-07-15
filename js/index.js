function toLink(urlRaw) {
    const urlNormal = urlRaw.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    const urlLowerCase = urlNormal.toLowerCase();
    const urlNoSymbols = urlLowerCase.replace(/[^\w\s]/gi, '');
    const url = urlNoSymbols.split(' ').join('-');

    return url;
}

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
            const url = toLink($(this.children)[1].innerText);

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

    //Fetch Blog data
    // const pageTitle = document.querySelector("#page-title").innerText;
    // let url = '';

    // if(pageTitle == "BLOG") {
    //     url = 'https://public-api.wordpress.com/rest/v1.1/sites/colectivocircular.com::blog/posts/?category=colectivo-circular';
    // } else if(pageTitle == 'INICIATIVA') {
    //     url = ''
    // } else {
    //     url = 'https://public-api.wordpress.com/rest/v1.1/sites/colectivocircular.com::blog/posts/?category=' + toLink(pageTitle);
    // }

    //  // Make a request to the REST API
    //  const loadPosts = async () => {
    //     const url = getApiUrl(api);
    //     const request = await fetch(url);
    //     const posts = await request.json();

    //     // Builds the HTML to show the posts
    //     const postsHtml = renderPostHtml(posts);

    //     // Adds the HTML into the posts div
    //     postsContent.innerHTML += postsHtml;

    //     // Required for the infinite scroll
    //     postsLoaded = true;
    //   };

    // fetch(url).then(function(response){
    //     return response.json();
    // }).then(function(posts){
    //     var postList = URL.createObjectURL(posts);
    // });

    // console.log(postList);
   

    //Footer
	
	const thisYear = new Date().getFullYear();
	$('footer').html('<p>© COLECTIVO CIRCULAR BY U.S. MEAT. ' +  thisYear + '</p>');

});