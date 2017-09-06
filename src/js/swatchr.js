'use strict';
const swatchr = {
    controls: function() {
        const buttons = document.getElementsByClassName('button');
        const selects = document.getElementsByClassName('select');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', buttonBindClick(i));
        }

        function buttonBindClick(i) {
            return function () {
                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove('button--active');
                    selects[j].classList.remove('select--active');

                }
                buttons[i].classList.add('button--active');
                selects[i].classList.add('select--active');
            }
        }
    },

    swatchFill: function() {
        const swatches = document.getElementsByClassName('swatch');
        for (let i = 0; i < swatches.length; i++) {
            const swatchBackground = swatches[i].getAttribute('data-swatch');
            if (swatchBackground.includes('.png')) {
                swatches[i].style.background = 'url(' + swatchBackground + ')';
            } else {
                swatches[i].style.background = swatchBackground;
            }
        }
    },

    updateHud: function() {
        const swatchTitle = document.getElementById('hud-description');
        const hudImage = document.getElementById('hud-image');
        const swatches = document.getElementsByClassName('swatch');

        for (let i = 0; i < swatches.length; i++) {
            swatches[i].addEventListener('click', buttonBindClick(i));
        }
        function buttonBindClick(i) {
            return function () {
                swatchTitle.innerHTML = swatches[i].getAttribute('data-title');

                if (swatches[i].getAttribute('data-swatch').includes('.png')) {
                    hudImage.style.background = 'url(' + swatches[i].getAttribute('data-swatch') + ')';
                } else {
                    hudImage.style.background = swatches[i].getAttribute('data-swatch');
                }
            }
        }

    },

    updatePattern: function () {
        const swatches = document.getElementsByClassName('swatch');
        const path = document.getElementById('component-path');
        const patternImage = document.getElementById('pattern-img');

        for (let i = 0; i < swatches.length; i++) {
            swatches[i].addEventListener('click', buttonBindClick(i));
        }
        function buttonBindClick(i) {
            return function () {
                if (swatches[i].getAttribute('data-swatch').includes('.png')) {
                    path.style.fill = 'url(#component-pattern)';
                    
                    patternImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', swatches[i].getAttribute('data-swatch'));
                } else {
                    path.style.fill = swatches[i].getAttribute('data-swatch');
                }
            }
        }
    }
}