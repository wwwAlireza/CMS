/**
    coded by alireza mohammadi ;
    github: github.com/wwwAlireza ;
    codepen: codepen.io/alireza82 ;
    linkedin: linkedin.com/in/wwwAlireza ;
    email: alireza.mhm02@gmail.com ;
    :)
**/
"use strict";
// DOM
const root = document.querySelector(":root");
const tooltipElements = document.querySelectorAll("[data-bs-toggle='tooltip']");
const sidebarProfile = document.querySelector("#sidebar-profile");
const mainSidebar = document.querySelector("#main-sidebar");
const siteViewVhart = document.querySelector("#site-view-chart");

// active tooltips
for (let element of tooltipElements) {
    new bootstrap.Tooltip(element)
}
new bootstrap.Offcanvas(mainSidebar);
const sidebarProfileInstance = bootstrap.Tooltip.getInstance(sidebarProfile);


// sidebar
let sidebarStatus = "close";
mainSidebar.addEventListener("hidden.bs.offcanvas", () => {
    sidebarProfileInstance.hide();
    changeContentWidth("100%");
    root.style.setProperty("--sidebar-toggler-rotate", "0deg");
    sidebarStatus = "close";
})
mainSidebar.addEventListener("shown.bs.offcanvas", () => {
    windowWidth = getWindowWidth();
    if (windowWidth > 768) {
        changeContentWidth("calc(100% - 270px)");
    } else {
        changeContentWidth("100%");
        sidebarProfileInstance.show();
    }
    root.style.setProperty("--sidebar-toggler-rotate", "180deg");
    sidebarStatus = "open";
})


// responsive
function changeContentWidth(val) {
    root.style.setProperty("--content-width", val)
}

function getWindowWidth() {
    return window.innerWidth || document.documentElement.innerWidth || document.body.innerWidth;
}

let windowWidth = getWindowWidth();
checkWindowWidth();

function checkWindowWidth() {
    windowWidth = getWindowWidth();
    if (windowWidth < 768) {
        changeContentWidth("100%");
        sidebarProfileInstance.show();
        siteViewVhart.setAttribute("height", "75%")
    } else {
        if (sidebarStatus == "open") {
            changeContentWidth("calc(100% - 270px)");
        } else {
            changeContentWidth("100%");
        }
        sidebarProfileInstance.hide();
        siteViewVhart.setAttribute("height", "25%")
    }
}
window.addEventListener("resize", checkWindowWidth);