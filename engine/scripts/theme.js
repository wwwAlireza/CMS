"use strict";
let currentTheme = localStorage.getItem("currentTheme");
if (!currentTheme) {
    currentTheme = "light";
}
const themeItems = {
    mainNavbar: document.querySelector("#main-navbar-colors"),
    downTable: document.querySelector("#down-table-colors"),
    toggler: document.querySelector(".change-theme-toggler"),
    lightIcon: document.querySelector("#theme-light-icon"),
    darkIcon: document.querySelector("#theme-dark-icon"),
}
const uiTheme = {
    setDark: setDarkTheme,
    setLight: setLightTheme,
}

const darkThemeColors = {
    mainBackground: "#141920",
    cardsBackground: "#212526",
    textsColor: "#e9e9e9",
    colorScheme: "dark",
}

const lightThemeColors = {
    mainBackground: "#f8f9fa",
    cardsBackground: "#ffffff",
    textsColor: "#161616",
    colorScheme: "light",
}

function setDarkTheme() {
    currentTheme = "dark";
    root.style.setProperty("--main-background-color", darkThemeColors.mainBackground);
    root.style.setProperty("--main-cards-background", darkThemeColors.cardsBackground);
    root.style.setProperty("--main-cards-text-color", darkThemeColors.textsColor);
    root.style.setProperty("--color-scheme", darkThemeColors.colorScheme);
    themeItems.mainNavbar.classList.remove("navbar-light");
    themeItems.mainNavbar.classList.add("navbar-dark");
    themeItems.mainNavbar.classList.add("border-secondary");
    themeItems.downTable.classList.add("border-secondary");
    themeItems.lightIcon.classList.add("show");
    themeItems.darkIcon.classList.remove("show");
    localStorage.setItem("currentTheme", "dark");
}

function setLightTheme() {
    currentTheme = "light";
    root.style.setProperty("--main-background-color", lightThemeColors.mainBackground);
    root.style.setProperty("--main-cards-background", lightThemeColors.cardsBackground);
    root.style.setProperty("--main-cards-text-color", lightThemeColors.textsColor);
    root.style.setProperty("--color-scheme", lightThemeColors.colorScheme);
    themeItems.mainNavbar.classList.add("navbar-light");
    themeItems.mainNavbar.classList.remove("navbar-dark");
    themeItems.mainNavbar.classList.remove("border-secondary");
    themeItems.downTable.classList.remove("border-secondary");
    themeItems.lightIcon.classList.remove("show");
    themeItems.darkIcon.classList.add("show");
    localStorage.setItem("currentTheme", "light");
}

themeItems.toggler.addEventListener("click", checkCurrentTheme);

function checkCurrentTheme() {
    switch (currentTheme) {
        case "light":
            {
                uiTheme.setDark();
            }
            break;
        case "dark":
            {
                uiTheme.setLight();
            }
            break;
    }
}

function setThemeFromCurrent() {
    switch (currentTheme) {
        case "light":
            {
                uiTheme.setLight();
            }
            break;
        case "dark":
            {
                uiTheme.setDark();
            }
    }
}
setThemeFromCurrent();