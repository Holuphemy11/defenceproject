
let token="ya29.a0AX9GBdUK2uhBzRZQtqC_sKVQGTqpY-5RzEo2fi4NGfHGidik4RVs2A5u6yTWJAAdCVCf0sSGw7Vyims_RVvklEjBmyGLdQZQ2GE5yKpfU4RVQWmCZJjs0d6drQsV-j_WiLDCyPqfFzxButZYbNjsbBc6epnmK20D48iy5gaCgYKAcQSARISFQHUCsbCw-OkwsjMvc6Ys1BB_m_iqA0173"
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
