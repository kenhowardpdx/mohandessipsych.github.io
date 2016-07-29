'use strict';

import * as $ from 'jquery';

const $footer = $('footer');
const $window = $(window);

setFooterPosition(true);
$window.on(<any>'resize', setFooterPosition);

function setFooterPosition(firstRun?: boolean) {

    if (firstRun) {
        setTimeout(setFooterPosition, 500);
    }
    
    $footer.removeAttr('style');

    let $footerBottomPosition = $footer.offset().top + $footer.outerHeight();

    if (Foundation['MediaQuery'].atLeast('medium') && $window.innerHeight() > $footerBottomPosition) {
        $footer.css({ position: 'fixed', bottom: '0'});
    }
    
}