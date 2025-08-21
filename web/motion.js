// JavaScriptでハンバーガーメニューを切り替えるdocument.addEventListener('DOMContentLoaded', function () {
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active'); // メニューの表示/非表示を切り替える
});

/*noteアーカイブ(schedule.html)*/
window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1.5,//画像を何枚表示するか
        spaceBetween: 10,//何ピクセル画像の間隔をあけるか
        centeredSlides: true,//見切らせたい場合メイン画像をセンターにもってくるか
        //自動再生する場合
        autoplay: {
            delay: 2000, //3秒後に次の画像に代わる
        },
        loop: true,//最後の画像までいったらループする
        //ページネーションをつける場合
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        //左右のナビゲーションをつける場合
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

//一年の流れ(schedule.html)
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: '自己紹介、ゼミ合宿の候補日程、ゼミスケジュール、新歓スケジュールなど',
                start: '2024-04-11',
                description: 'zemi'
            },
            {
                title: 'Telloの操作体験',
                start: '2024-04-18',
                description: 'zemi'
            },
            {
                title: '新歓',
                start: '2024-04-25',
                description: 'event',
                isEvent: true
            },
            {
                title: '本読みスタート?',
                start: '2024-05-02',
                description: 'zemi'
            },
            {
                title: '本読み、Python',
                start: '2024-05-09',
                description: 'zemi'
            },
            {
                title: '全体ゼミ',
                start: '2024-05-16',
                description: 'full-zemi'
            },
            {
                title: '本読み、Python',
                start: '2024-05-23',
                description: 'zemi'
            },
            {
                title: '休講',
                start: '2024-05-30',
                description: 'break'
            },
            {
                title: '本読み、Python',
                start: '2024-06-06',
                description: 'zemi'
            },
            {
                title: '本読み、Python',
                start: '2024-06-13',
                description: 'zemi'
            },
            {
                title: '全体ゼミ',
                start: '2024-06-20',
                description: 'full-zemi'
            },
            {
                title: '本読み、Python',
                start: '2024-06-27',
                description: 'zemi'
            },
            {
                title: '本読み、Python',
                start: '2024-07-04',
                description: 'zemi'
            },
            {
                title: '全体ゼミ',
                start: '2024-07-11',
                description: 'full-zemi'
            },
            {
                title: 'グルメツアー（希望者のみ）',
                start: '2024-07-18',
                description: 'event',
                isEvent: true
            },
            {
                title: '全体ゼミ',
                start: '2024-09-26',
                description: 'full-zemi'
            },
            {
                title: '大阪航空少年団 ドローン体験会',
                start: '2024-09-28',
                description: 'event',
                isEvent: true
            },
            {
                title: '休講',
                start: '2024-10-03',
                description: 'break'
            },
            {
                title: 'ゼミ合宿（博物館、美術館見学）',
                start: '2024-10-06',
                end: '2024-10-07',
                description: 'event',
                isEvent: true
            },
            {
                title: '全体ゼミ',
                start: '2024-10-10',
                description: 'full-zemi'
            },
            {
                title: 'ケーススタディ/基本情報技術者試験',
                start: '2024-10-17',
                description: 'zemi'
            },
            {
                title: 'ケーススタディ、基本情報技術者試験',
                start: '2024-10-24',
                description: 'zemi'
            },
            {
                title: 'ケーススタディ、基本情報技術者試験',
                start: '2024-10-31',
                description: 'zemi'
            },
            {
                title: 'ケーススタディ、基本情報技術者試験',
                start: '2024-11-07',
                description: 'zemi'
            },
            {
                title: '全体ゼミ',
                start: '2024-11-14',
                description: 'full-zemi'
            },
            {
                title: 'リサフェ練習',
                start: '2024-11-21',
                description: 'zemi'
            },
            {
                title: '休講(論文執筆相談会)',
                start: '2024-11-28',
                description: 'zemi'
            },
            {
                title: 'ドローン水田班報告会',
                start: '2024-12-05',
                description: 'zemi'
            },
            {
                title: 'モリサワ企業見学',
                start: '2024-12-09',
                description: 'event',
                isEvent: true
            },
            {
                title: '休講',
                start: '2024-12-12',
                description: 'zemi'
            },
            {
                title: 'ドローンイベント＠大阪、忘年会',
                start: '2024-12-19',
                description: 'event',
                isEvent: true
            },
            {
                title: '全体ゼミ',
                start: '2025-01-09',
                description: 'full-zemi'
            },
            {
                title: '予備日',
                start: '2025-01-16',
                description: 'zemi'
            },
            {
                title: '4年生卒業式',
                start: '2025-03-17',
                end: '2025-03-18',
                description: 'event',
                isEvent: true
            }
        ]

    });
    calendar.render();
});

//以下　岩田追加分
//scheduleのボタン
function showTab(tab, button) {
    // Remove active class from all tabs and contents
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.schedule-content').forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    button.classList.add('active');
    const selectedContent = document.getElementById(tab);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

