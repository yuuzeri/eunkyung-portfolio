$(function() {
    // fullpage 설정
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7','page8','page9','page10'],
        sectionsColor: ['#0D7C66', '#0D7C66', '#0D7C66', '#0D7C66', '#0D7C66'],
        navigation: true, 
        navigationPosition: 'right',
        slidesNavigation: true,
        responsiveWidth: 1000,
        afterLoad: function(anchorLink, index) {
            console.log('현재 영역의 번호는 ' + index);
            
            // 4번째 및 6번째 섹션에 애니메이션 추가
            if (index === 4 || index === 6) {
                $('.section').eq(index - 1).find('h2').addClass('animate-in');
            } else {
                // 4번째 및 6번째 섹션이 아닌 경우 애니메이션 클래스 제거
                $('.section').eq(index - 1).find('h2').removeClass('animate-in');
            }

            // 마지막 영역일 때 알림
            if (index === 8) {
                alert('마지막입니다~');
            }
        },
        onLeave: function(index, nextIndex, direction) {
            // 섹션을 떠날 때 애니메이션 클래스 제거
            if (index === 4 || index === 6) {
                $('.section').eq(index - 1).find('h2').removeClass('animate-in');
            }
        }
    });
});
