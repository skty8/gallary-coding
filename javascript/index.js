$(document).ready(function () {
});

// スクロール時
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    // メインビジュアルの変化
    $('.main_visual img').css('width', 100 - scrollTop / 10 + '%');

    // スマホ用ロゴ・メニュー表示
    // $('.fadeout').each(function () {
    if ($(this).scrollTop() > 600) {
        $('.top_menu').addClass('fadein');
    } else {
        $('.top_menu').removeClass('fadein');
    }
    // });

    // 要素を下から表示
    fadeAnime();
});

// 画面読み込み時
$(window).on('load', function () {
    fadeAnime();
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




