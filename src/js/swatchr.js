var swatchr = {
    controls: function() {
        var buttons = document.getElementsByClassName('button');
        var selects = document.getElementsByClassName('select');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', buttonBindClick(i));
        }

        function buttonBindClick(i) {
            return function () {
                for (var j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove('button--active');
                    selects[j].classList.remove('select--active');

                }
                buttons[i].classList.add('button--active');
                selects[i].classList.add('select--active');
            }
        }
    },

    swatchFill: function() {
        var swatches = document.getElementsByClassName('swatch');
        for (var i = 0; i < swatches.length; i++) {
            var swatchBackground = swatches[i].getAttribute('data-swatch');
            if (swatchBackground.includes(".png")) {
                swatches[i].style.background = "url(" + swatchBackground + ")";
            } else {
                swatches[i].style.background = swatchBackground;
            }
        }
    },

    updateHud: function() {
        var swatchTitle = document.getElementById("hud-description");
        var hudImage = document.getElementById("hud-image");
        var swatches = document.getElementsByClassName('swatch');

        for (var i = 0; i < swatches.length; i++) {
            swatches[i].addEventListener('click', buttonBindClick(i));
        }
        function buttonBindClick(i) {
            return function () {
                swatchTitle.innerHTML = swatches[i].getAttribute("data-title");

                if (swatches[i].getAttribute('data-swatch').includes(".png")) {
                    hudImage.style.background = "url(" + swatches[i].getAttribute('data-swatch') + ")";
                } else {
                    hudImage.style.background = swatches[i].getAttribute('data-swatch');
                }
            }
        }

    }
}