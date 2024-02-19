/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
/**
 * @file main.js
 * @description 
 * @author 
 * @copyright 
 */

$(document).ready(function(){

    //Nav Slide Toggle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    //Sticky Navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){
           $('header').addClass('sticky');
           console.log("100px atteint")
        }else{
            $('header').removeClass('sticky');
        }
    })
    
});
