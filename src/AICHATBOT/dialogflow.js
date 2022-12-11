
let token = "ya29.a0AeTM1if-OrMPYstDFheOmWG0hq9R0610LkfIL3jfIICCgNPNpeNbyPBvn_eQ7BIH-mqn4UkQbU9Q3yy8o2eo-B6tcefXSHyHbLvL6-HUGCjQLtdKxO5cpQw2-MjhyNE7e_wbt6ug577wd4saGiPMwXDGcTUybL-k7-50aCgYKATASARISFQHWtWOm2sGzMg9fOYzA9eSAd7E--Q0171"
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
