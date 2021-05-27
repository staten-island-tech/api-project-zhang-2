import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
  });
};
