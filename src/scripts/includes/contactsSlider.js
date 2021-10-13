"use strict";

import Glide from '@glidejs/glide';

export const contactsSlider = () => {
    let options = {
        startAt: 0,
        perView: 4,
        rewind: false,
        animationTimingFunc: 'cubic-bezier(.43,0,.03,1)',
        rewindDuration: 1000,
        peek: {
            before: 0,
            after: 90
        },
        breakpoints: {
            572: {
                perView: 1,
                peek: {
                    before: 0,
                    after: 150
                },
            },
            875: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 120
                },
            },
            1399: {
                perView: 3,
                peek: {
                    before: 0,
                    after: 90
                },
            },
        }
    }

    const sliders = document.querySelectorAll('.reviews__table--content');

    for (let i = 0; i < sliders.length; i++) {
        new Glide(sliders[i], options).mount()
    }

};
