var velocity = 0.5;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.bg1').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-1350;
        $(this).css('backgroundPosition', "50% " + (Math.round((height - pos) * velocity) + 'px'));
    });
    $('.bg2').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-1000;
        $(this).css('backgroundPosition', "50% " + (Math.round((height - pos) * velocity) + 'px'));
    }); 
};

$(window).bind('scroll', update);