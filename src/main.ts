import "./style.css";
//import "./error26.css"
import type { Emotions } from "./Emotions";

const API_URL = "https://retoolapi.dev/xJiRs2/data";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("diary_form")?.addEventListener("submit", addEmotion);
});

async function addEmotion(e: SubmitEvent) {
  e.preventDefault();
}
