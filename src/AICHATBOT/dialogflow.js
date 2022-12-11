
let token = "ya29.a0AeTM1icN9sW-yPre5qILHGRCp9UqJxTBwGujuDifoxfkWUbsA1ikHWqEqb_XJFsDgg_zvlZB_3oUg0rc5cV7vzv7cETFeybwBt8KcUbqZ1EOSgeWc3eUu29FYwUxBNkvy0gWyFqTa2Y-v6SVQ7Y_0YJXNHdBHcG0MlMJaCgYKAXMSARISFQHWtWOm5GxDpUb2pgsC6DyjHpqd4g0171"
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
