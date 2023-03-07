"use strict";

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("#loader").classList.add("hidden");
  }
};
