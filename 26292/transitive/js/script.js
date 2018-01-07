
        $( document ).ready(function() {
            var width = $(window).width();
            if(width > 480) {
                scaleHero();
                $(window).on('resize', function() {
                    scaleHero();
                });
            }
        });
        
        function scaleHero() {
            var height = $(window).height() + 5;
            var unitHeight = parseInt(height) + 'px';
            $('.homepage-hero').css('height',unitHeight);
            $('.middle-hero').each(function() {
                var unitHeight_2 = parseInt(height/2 - $(this).height()/2) + 'px';
                $(this).css('top',unitHeight_2); 
            });
        }
    