"use strict";
let togglesidebar;
window.onload = function() {
    AOS.init({
        duration: 1000
    });
    togglesidebar = document.querySelector('#toggle').addEventListener('click', function() {
        document.querySelector("#sidebar").style.left = "0px";
        document.querySelector("#toggle").style.left = "50px";
        document.querySelector("#sidebar").classList.toggle("active");
        document.querySelector("#toggle").style.display = "none";
    });
}

function hidenav() {
    document.querySelector("#sidebar").style.left = "-210px";
    document.querySelector("#toggle").style.left = "215px";
    setTimeout(function() {
        document.querySelector("#toggle").style.display = "block";
    }, 500);
}