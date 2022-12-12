
// let token="ya29.a0AeTM1icMZ-9wm9iB_kdVCT5JBm5HAZBPkxBUoe5bvkjkZ_Fq9qqdVWBVUOkYaXPXeRYYMSXsF0bCVSuIZVaU-atAnAAv_0sCSQp1TbIpE6Kf1dnqZFn4e4hTzgF5MoFF0i0y0lOvkn5LIRfwKYe0vRrRGSlmq99FzNCpPwaCgYKAd0SARISFQHWtWOmi4V9wMqq6jwAmI_zWsMW1g0173"
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
