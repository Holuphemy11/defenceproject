
let token="ya29.a0AeTM1ieEfc5iozznuBsi8-_3HIhQw0_OrQGLEuPiOL93aQmvFLRWI8XZs58XO94enw8OPr-uh9CvPCSc1Sq5fOifiURpfhRpM02dhdL9JHgrjaP9k8vKBBie5Scz2E3sHdaz9a3QkFxZ9XkJ4dW4t0OHCrHaN8un5NhE1gaCgYKAfQSARISFQHWtWOm8gHjjvfuiD-3gAj3I_oBOQ0173"
async function ChatBot(word) {
  let sessionID = Math.floor(Math.random() * 378974206843640 + 36893787392073);
  //   let auths = gcloud auth print-access-token;
  try {
    const response = await fetch(
      `https://dialogflow.googleapis.com/v2/projects/defense-project-chatbot/agent/sessions/${sessionID}:detectIntent`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${token} `,
          "x-goog-user-project": "defense-project-chatbot",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          query_input: {
            text: {
              text: word,
              language_code: "en-US",
            },
          },
        }),
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
}

// console.log(Model('am hungry'))
export { ChatBot };
