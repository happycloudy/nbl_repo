export const doc_slider_iphone = () => {
    let arrows = document.getElementsByClassName('new-accordion__slider-arrow')
    let images = document.getElementsByClassName('new-accordion__slider-image')
    let bigImages = document.getElementsByClassName('new-accordion__slider-big_image')

    Array.from(images).forEach((img, imgId) => {
        img.addEventListener('click', e => {
            // меняет большую картинку
            Array.from(bigImages).forEach(img => {
                img.classList.remove('new-accordion__slider-big_image-active')
            })

            Array.from(bigImages).forEach((img, bigImgId) => {
                if (bigImgId === imgId) {
                    img.classList.add('new-accordion__slider-big_image-active')
                }
            })


            // меняет стрелку
            Array.from(arrows).forEach(arr => {
                arr.classList.remove('new-accordion__slider-arrow-active')
            })

            Array.from(arrows).forEach((arr, arrId) => {
                if (arrId === imgId) {
                    arr.classList.add('new-accordion__slider-arrow-active')
                }
            })
        })
    })
}
