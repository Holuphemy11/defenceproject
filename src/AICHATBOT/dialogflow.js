
let token="ya29.a0AeTM1idVBfndyofpTObh96pj-JLzr5i8QRvVWhT8PpOJl7rwZQwRBOmy60-4BSCdbAkYb7Y5voCLZnbudVE20u5PyDqdGVTdxDEsDZQN5xEj_M3WN25xJTOx5_hDsE3MWLeupZaFRUiXqHO_qaxWmRVVR6c7JCg041IEGgaCgYKAVASARISFQHWtWOm-xKGXhZfJwRIbesEfH9WoA0173"
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
