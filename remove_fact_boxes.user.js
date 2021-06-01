// ==UserScript==
// @name        Remove Youtube Fact Boxes
// @version     2021.06.01.1
// @namespace   https://github.com/amckee/RemoveYoutubeFactBoxes
// @description Removes the dumbass 'fact' boxes.
// @author      Adam McKee
// @include     http*://*.youtube.com/*
// @updateURL   https://raw.githubusercontent.com/amckee/RemoveYoutubeFactBoxes/main/remove_fact_boxes.user.js
// @supportURL  https://github.com/amckee/RemoveYoutubeFactBoxes/issues
// @run-at      document-end
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
