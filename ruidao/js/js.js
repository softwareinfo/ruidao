/*
* @Author: name
* @Date:   2017-10-27 17:51:11
* @Last Modified by:   name
* @Last Modified time: 2017-10-27 17:55:04
*/

$(function(){
    var service = new Swiper('.service_c',{
        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    })
})