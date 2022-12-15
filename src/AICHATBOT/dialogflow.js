
let token="ya29.a0AX9GBdUs1A9eRKcO_97CzpAHAPwH-NTrBXCptqQ-JjLBU6a8GNpVVYEwKP5-1MzI6ZfGlxewHrxRgWpDudsMQr0zsXYIK_tm7wk5TdKEP2gx385LQIzXB4TYvEjEA-dq0HYu6fgMhCH0vhNwhClOUo6t4u3rZXNYQH-DbwaCgYKAcMSARISFQHUCsbCgXPx9DghNgFWykDfYLCyQQ0173"
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
            `Bearer ${token}`,
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

// console.log(Model('Am hungry'))
export { ChatBot };
