
let token="ya29.a0AeTM1ieKtuUjjqkIcsX120TPsBtQR2n2ATVGxp7akjlCJg4XTu3kyLEIdlD5wfwWaZEL8HX8XmUtuIQKk8A-thJgJkf4HNSKhr3PWTXM9X7HibgxBbtMZWvwaliZUN2pnyfZF9yoUOjT0uba80szoyod5RBk1AROMLMoYQaCgYKARYSARISFQHWtWOmGnVfnV2YtZH7g3gxg7Gzyg0173"
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
