"use strict";
var Page = function() {
    var n = function() {
            $("#nav-toggle-btn").click(function() {
                $("#navbar").toggleClass("in")
            })
        },
        i = function() {
            $("#new-toggle").click(function() {
                $("#newbar").toggleClass("in")
            })
        };
    return {
        initNav: n,
        initNewnav: i
    }
}();
$(function() {
    Page.initNav(), Page.initNewnav()
});
//返回顶部
$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $("#toTop").fadeIn();
    } else {
        $("#toTop").fadeOut();
    }
});
$("body").append("<div id=\"toTop\" style=\"border:1px solid #444;background:#333;color:#fff;text-align:center;padding:10px 13px 7px 13px;position:fixed;bottom:10px;right:10px;cursor:pointer;display:none;font-family:verdana;font-size:22px;\">^</div>");
$("#toTop").click(function () {
    $("body,html").animate({scrollTop: 0}, 800);
});
//为点击跳转页面进行轮播图显示或隐藏的判断 index
$(function(){
    $("a").click(function(){
        setTimeout(function(){
            if(window.location.hash!=="#/home"){
                carousel.style.display="none";
            }else {
                carousel.style.display="block";
            }
        },1000)
    })
//为点击跳转页面进行轮播图显示或隐藏的判断 home_en
    $(function(){
        $("a").click(function(){
            setTimeout(function(){
                if(window.location.hash!=="#/home_en"){
                    carousel.style.display="none";
                }else {
                    carousel.style.display="block";
                }
            },1000)
        })
    })
    //页面刷新或关闭时提示
    //window.onbeforeunload = function(){ return '确定要刷新页面吗？'; }
})