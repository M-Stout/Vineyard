//Illustration by http://psdblast.com/flat-color-abstract-city-background-psd
$(document).on('mousemove', function(e) {
        var w = $(document).width();
        var h = $(document).height();
        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $("*").each(function(i, el) {
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    });