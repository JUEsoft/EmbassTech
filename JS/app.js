"use strict";
window.onload = function() {
    AOS.init({
        duration: 1000
    });
    document.querySelector('#share').addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Hey there!, I just visited Embass Technicals website. \n Contact them for your Borehole services',
                url: 'https://bit.ly/EmbassTech'
            }).then(function() {
                Swal.fire({
                    text: 'Thanks for sharing',
                    type: 'success'
                });
            })
            .catch(function(err){
                Swal.fire({
                    text: 'An error occurred, please try again later',
                    type: 'error'
                });
            });
        } else {
            shareDialog.classList.add('is-open');
        }
    });
}
function hidenav() {
    document.querySelector("#sidebar").style.left = "-210px";
    document.querySelector("#toggle").style.left = "215px";
    setTimeout(function() {
        document.querySelector("#toggle").style.display = "block";
    },
        500);
}
