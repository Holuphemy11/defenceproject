
// let token="ya29.a0AeTM1idPW-jTn7dSU_UCHtkqzAiewedYXKlWJCgG9rMOEuoMjpGrWTGd65I1qIN5drTYQXMXN420J1CFTD9NomA062PXkupGIUsl_-IRyuErsIJaMXILhfcr76oEUbfbQPLYBaDRoC_Z5WM3wpZ0kJGYVrPzyGzt4_BIZAaCgYKARYSARISFQHWtWOmjwBs4bK0NAcS3eE9JH1D7g0173"
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

// console.log(Model('am hungry'))
export { ChatBot };
