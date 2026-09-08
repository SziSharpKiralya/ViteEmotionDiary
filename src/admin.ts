import "./style.css";
import type { Emotions } from "./Emotions";

const API_URL = "https://retoolapi.dev/xJiRs2/data";

async function loadEmotions() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Invalid response");
  }
  const data = (await response.json()) as Emotions[];

  const tableContent = document.getElementById("table_content");
  tableContent!.textContent = "";

  for (const i of data) {
    const tr = document.createElement("tr");

    const tdDate = document.createElement("td");
    tdDate.textContent = i.Date;
    tr.appendChild(tdDate);

    const tdEmotion = document.createElement("td");
    tdEmotion.textContent = i.Emotion;
    tr.appendChild(tdEmotion);

    const tdContext = document.createElement("td");
    tdContext.textContent = i.Context;
    tr.appendChild(tdContext);

    const tdDelete = document.createElement("td");
    const delButton = document.createElement("button");
    delButton.textContent = "❌";

    tdDelete.append(delButton);
    tr.appendChild(tdDelete);

    tableContent?.appendChild(tr);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadEmotions();
});
