
// let token="ya29.a0AeTM1if_u0Y5qRNCWjPYB5PUGYHm0QuFXceErE_3Ovmqb2UEuOQha-7usMC2OI5GSNlpwFE9MdW0GZbK_p854-6kuvZmW9HhE1ol7sfjVqTrTGjrWa4Mmr4SX8_jUNbuWD43bRz5jeYHqpBBg1pBm_kC5fXXZuKUWBPOVQaCgYKATwSARISFQHWtWOm0S5lNBvh2ZMBBb9nfXmUfg0173"
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
