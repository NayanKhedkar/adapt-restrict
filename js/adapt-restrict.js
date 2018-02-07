define(["core/js/adapt"], function(Adapt) {

    Adapt.on('menuView:postRender pageView:ready', function(page) {
        var config = Adapt.course.get("_restrict");

        if (!config || !config._isEnabled) return;

        if ($('body').hasClass('unselectable')) return;

        $('body').addClass('unselectable');
        document.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        }, false);
    });
});