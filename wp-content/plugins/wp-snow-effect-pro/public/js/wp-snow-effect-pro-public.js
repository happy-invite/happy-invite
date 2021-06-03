(function ($) {
    'use strict';

    $(window).load(function () {

        if(!snoweffectpro.show) return;
        jQuery().jSnow({
            followScroll: true,
            flakes: snoweffectpro.flakes_num,
            fallingSpeedMin: parseInt(snoweffectpro.falling_speed_min),
            fallingSpeedMax:  parseInt(snoweffectpro.falling_speed_max),
            flakeMaxSize:  parseInt(snoweffectpro.flake_max_size),
            flakeMinSize: parseInt(snoweffectpro.flake_min_size),
            flakeColor: [ snoweffectpro.flake_color ],
            vSize: snoweffectpro.vertical_size,
            fadeAway: snoweffectpro.fade_away,
            zIndex: snoweffectpro.flake_zindex,
            flakeCode: ["&" + snoweffectpro.flake_type + ";"],
            xCorrect: parseInt(snoweffectpro.x_fix),
        });
    });

})(jQuery);
