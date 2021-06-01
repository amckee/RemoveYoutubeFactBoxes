// ==UserScript==
// @name         Remove Youtube Fact Boxes
// @version      2021.03.04
// @description  Removes the dumbass 'fact' boxes.
// @author       Adam McKee
// @match        http*://*.youtube.com/*
// @updateURL    https://raw.githubusercontent.com/amckee/RemoveYoutubeFactBoxes/main/remove_fact_boxes.js
// ==/UserScript==

setTimeout(function() {
    // videos
    var el = document.getElementById("clarify-box");
    if( el != null ){
        console.log("removing clarify-box");
        el.style.display = 'none';
        el.remove();
    } else {
        console.log("did not find clarify-box");
    }

    // search results
    el = document.getElementsByTagName("ytd-clarification-renderer");
    for (var i = 0; i < el.length; i++) {
        console.log("removing ytd-clarification-renderer in loop");
        //        el[i].style.display = 'none';
        el[i].remove();
    }
    el = document.getElementsByTagName("ytd-info-panel-container-renderer");
    for (i = 0; i < el.length; i++) {
        console.log("ytd-info-panel-container-renderer in loop");
        el[0].style.display = 'none';
        el[0].remove();
    }
}, 1000);
