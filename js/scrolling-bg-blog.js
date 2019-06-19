var velocity = 0.2;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.bg3').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-1250;
        $(this).css('backgroundPosition', "50% " + (Math.round((height - pos) * velocity) + 'px'));
    }); 
};

$(window).bind('scroll', update);