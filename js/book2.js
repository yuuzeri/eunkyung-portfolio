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
            
            if (index === 4 || index === 6) {
                $('.section').eq(index - 1).find('h2').addClass('animate-in');
            } else {
                $('.section').eq(index - 1).find('h2').removeClass('animate-in');
            }


            if (index === 8) {
                alert('감사합니다');
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if (index === 4 || index === 6) {
                $('.section').eq(index - 1).find('h2').removeClass('animate-in');
            }
        }
    });
});
