import "./style.css";
//import "./error26.css"
import type { Emotions, NewEmotions } from "./Emotions";

const API_URL = "https://retoolapi.dev/xJiRs2/data";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("diary_form")?.addEventListener("submit", addEmotion);
});

async function addEmotion(e: SubmitEvent) {
  e.preventDefault();

  const diaryForm = document.getElementById('diary_form') as HTMLFormElement;
  const data = new FormData(diaryForm);

  const newData: NewEmotions = {
    Date: new Date().toISOString().slice(0, 10),
    Context: data.get("context_status")!.toString(),
    Emotion: data.get("emotion_status")!.toString()
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      'Content-type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Invalid response');
  }

  diaryForm.reset();
}
