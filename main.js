let log = console.log;
import { refData } from "C:\Users\markb\workspace\foundations\test-repo\referenceData.js"";

function renderToDom (divId, html) {
  const selectedDiv = document.querySelector(divId);// render elements to the dom dynamicly
  selectedDiv.innerHTML = html;
}

const renderCards = ()
