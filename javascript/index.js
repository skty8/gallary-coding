$(document).ready(function () {
});

// スクロール時の動作
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();

    // メインビジュアルの変化
    if (window.innerWidth <= 900) {
        $('.main_visual img').css('width', 100 - scrollTop / 10 + '%');
    } else {
        $('.main_visual img').css('width', 100 / 3 + scrollTop / 10 + '%');
    }

    // スマホ用ロゴ・メニュー表示
    if (scrollTop > 600) {
        $('.top_menu').css('visibility', 'visible');
        $('.top_menu').addClass('fadein');
    } else {
        $('.top_menu').removeClass('fadein');
        $('.top_menu').css('visibility', 'hidden');
    }

    // 要素を下からフェードイン
    fadeAnime();


    let gallaryOffset = $('.gallery').offset().top - $(window).height();
    let accessOffset = $('.access').offset().top - $(window).height();
    let contactOffset = $('.contact').offset().top - $(window).height();

    // サイドメニュー表示・非表示
    if (scrollTop > gallaryOffset) {
        if (scrollTop < accessOffset) {
            $('.side_menu').removeClass('side_fadedown');
            $('.side_menu').addClass('side_fadeup');
        } else {
            $('.side_menu').removeClass('side_fadeup');
            $('.side_menu').addClass('side_fadedown');
        }

    } else {
        $('.side_menu').addClass('side_fadedown');
    }



    // 背景表示・非表示
    if (scrollTop > contactOffset) {
        $('.bg').css('opacity', 0);
    } else if (scrollTop > accessOffset) {
        $('.gallery').addClass('fadeout');
        $('.bg').css('opacity', 1);
    } else if (scrollTop < accessOffset) {
        $('.gallery').removeClass('fadeout');
        $('.bg').css('opacity', 0);
    }

});

// ロゴクリック時トップへ戻る
$(document).on('click', '.logo', function () {
    $('html,body').animate({
        scrollTop: 0
    }, 'slow');
});

// バーガーメニュー表示
$(document).on('click', '.burger_menu', function () {
    if ($('nav').hasClass('burger_fadedown')) {
        $('nav').removeClass('burger_fadedown');
        $('nav').addClass('burger_fadeup');
    } else {
        $('nav').addClass('burger_fadedown');
        $('nav').removeClass('burger_fadeup');
    }

    // バーガーメニュー表示変化
    $(this).toggleClass('active');
});

// 画面読み込み時
$(window).on('load', function () {
    fadeAnime();

    // メインビジュアルの変化
    if ((window.innerWidth) <= 900) {
        $('.main_visual img').css('width', 100 - $(window).scrollTop() / 10 + '%');
    } else {
        $('.main_visual img').css('width', 100 / 3 + $(window).scrollTop() / 10 + '%');
    }
});


// スクロール時下から表示（関数の定義）
function fadeAnime() {
    $('.fadeup_trigger').each(function () { //fadeUpTriggerというクラス名が
        let elemPos = $(this).offset().top - 5;//要素より、50px上の
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scrollTop >= elemPos - windowHeight) {
            $(this).addClass('fadeup');// 画面内に入ったらfadeUpというクラス名を追記
        }
    });
}



