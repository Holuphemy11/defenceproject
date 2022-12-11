
// let token="ya29.a0AeTM1idkESVlS-z0vKOCg-iZ3NV0fhZCkbnJuPPyOztWinCRXnyM_NkYw2_bPNuqBV-6COA7O98XZx1tMKDZ7Y98iNDXRbsPrnqTvR4e9uuYu1EXKCPYVoZJ8xKCK9CIosq_SWcKTb_iq6xopw2r1LqvGSD_WUOv7gZTjQaCgYKAZ4SARISFQHWtWOmqduXgTnVEXRAvmmmKpgrXw0173"
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

// console.log(Model('I am hungry'))
export { ChatBot };
