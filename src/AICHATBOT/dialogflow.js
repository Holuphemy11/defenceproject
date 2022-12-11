
// let token="ya29.a0AeTM1ieN1AVAYnerURbh1M9NTYF_08WIdeCVIicASMLdQGjLb7qHuAdKp56xNIexczSk4Aq9kRljWwq57xXTqIm_oFJBNT1irVJZhvNH_lUBFdk00koVI-FV8C4FFnapFLwxup_wdyiHEJQXBeLIdGzuMKNkA7eP3NC03QaCgYKATwSARISFQHWtWOmVB8FyixmrBwMEUpWygLzEA0173"
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
