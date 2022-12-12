
let token="ya29.a0AeTM1if3roPsdIss92ByqZo70KcfI9gUh4FPJQ0t-G2ndkF71HRETjiN0N62sQsQbjk1jEyimXg4-iAkWR0Jj3_kpGaQ1TZoN0ITceKzC3TmUM_PHSb0ngN1vqmOEdgJJWA3gbpRoGfEA1dlYvrkn0cFAK5ElDO2xAP3mwaCgYKARUSARISFQHWtWOmqgFg_2D9S4F3iRHrQYqu4A0173"
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
