
// let token="ya29.a0AeTM1ie_TljGrMCdz2uI6Izb81bYNEcZ81wOxKSHuX5GxRbofC62i9iS2g0bABrkREw5Bqk7_YA1Mdwdz_cRELt-8IAHaHV1stFFFeDOWHajzUV4-mOAm3bdiWwEnWlRg2vU0r2RUlMjXkod7yAvJNOO8v33oYb-6Hi_mQaCgYKAagSARISFQHWtWOmnJDmNsEqrDf8yPSazjAkPw0173"
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
