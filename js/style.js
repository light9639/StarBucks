$(function() {
    //모바일 메뉴 전체화면
    $('header>.innerBox>.mobileheader>a').on('click', function(){
        $('.app')
        .addClass("mobileActive")
        .siblings();
    });
    $('.app>.sidebar>div>i').on('click', function(){
        $('.app')
        .removeClass("mobileActive")
        .siblings();
    });

    //검색창 클릭시 검색창 나오게
    $("header>.innerBox>.main-menu>.headerIcon>a:first-child").click(function (e) {
        $("#search")
        .removeClass("active")
        .siblings();
    })
    $("#search>.search-header>.btn-close").click(function (e) {
        $("#search")
        .addClass("active")
            .siblings();
    })

    //헤더 검색창 클릭시 검색창 나오게
    $("header>.innerBox>.mobileheader>.MobileIcon>a:first-child").click(function (e) {
        $("#search")
        .removeClass("active")
        .siblings();
    })
    $("#search>.search-header>.btn-close").click(function (e) {
        $("#search")
        .addClass("active")
        .siblings();
    })

    //모바일 사람 이미지 클릭시 메뉴 나오도록
    $(".Icon_last").hover(function(){
        $(".Mobile_UserBox").addClass("bg");
    }, function(){
        $(".Mobile_UserBox").removeClass("bg");
    })
    $(".Mobile_UserBox").hover(function(){
        $(this).addClass("bg");
    }, function(){
        $(this).removeClass("bg");
    })

    //모바일 화면 나오게 만들기
    $('.mobileheader>a>i').click(function(){
        $('body').toggleClass('menu-open');
    })

    //헤더 사람 이미지 클릭시 메뉴 나오도록
    $(".headerIcon>.Icon_last").hover(function(){
        $(".header_UserBox").addClass("bg1");
    }, function(){
        $(".header_UserBox").removeClass("bg1");
    })
    $(".header_UserBox").hover(function(){
        $(this).addClass("bg1");
    }, function(){
        $(this).removeClass("bg1");
    })

    //검색창 클릭시 2자 이상 입력
    $('form[name="search_form"]').on('submit', function(e){
        var keyword = $('input[name="s"]', this).val();

        if ( keyword.split(' ').join('')  == '' || keyword.split(' ').join('').length < 2 ) {
            alert('검색어를 2자 이상 입력해주세요.');
            e.preventDefault();
            return false;
        }
    });

    $('#menu-item-57').css('font-weight', 900);

    //스크롤 탑 내리면 나오게
    const nav = document.querySelector('header');

    function stickMenu(){
        let winYPos = window.pageYOffset;
        let navElePos = nav.offsetTop;

        if(winYPos > navElePos) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickMenu);

    // //메뉴 호버시 슬라이드 다운 효과
    const main = document.querySelectorAll(".main-menu > li");

    for (let i = 0; i < main.length; i++) {
        $(".item>.item_" + i).mouseover(function () {
            $(".contents_" + i).stop().slideDown(450);
        })
        $(".item>.item_" + i).mouseout(function () {
            $(".contents_" + i).stop().slideUp(450);
        });
    }

    //스타벅스 메뉴 슬라이드
    $('#mainBanner .img').slick({
        fade: true,
        cssEase: 'linear',
        speed: 300,
        infinite: true,
        autoplay: true,
        // arrows: true,
        dots: true,
        pauseOnHover : true,
        draggable : true,
        prevArrow : $('.main_indicator .prevArrow'),
        nextArrow : $('.main_indicator .nextArrow'),
    });

    //스타벅스 메뉴 슬라이드
    $('.cold_mobile_img').slick({
        speed: 300,
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover : true,
        draggable : true,
    });

    // 스타벅스 이벤트
    $('.event_box').slick({
        slide: 'li',
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        prevArrow : $('.indicator .prevArrow'),
        nextArrow : $('.indicator .nextArrow'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // 스타벅스 뉴스 클릭시 이동
    $(".bannerBtn>li").click(function () {
        var sNum = $(this).index();
        $(".newsBanner").stop().animate({
            "margin-left": -sNum * 100 + "%"
        }, 500)
        $(this).addClass("active").siblings().removeClass("active");
    })

    //스크롤 내릴 시 효과
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: "1000"
    });

    // setInterval(addItem, 300);
})
