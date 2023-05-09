const generate = async () => {

  document.forms["munnareply"]["reply"].value = "Loading...";
  const reply = "" + document.forms["munnareply"]["reply"].value;

  const input = "" + document.forms["input"]["input"].value;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: "POST",
    body: JSON.stringify({
      "model": "gpt-3.5-turbo", "messages":
        [{ "role": "assistant", "content": reply },
        { "role": "user", "content": input }
        ]
    }),
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer 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",
    }
  }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {

        document.forms["munnareply"]["reply"].value = json.choices[0].message.content;
        //document.forms["munnareply"]["reply"].value = "niggerinmyass";
        document.getElementById("output");
        let msg = new SpeechSynthesisUtterance(document.forms["munnareply"]["reply"].value);
        speechSynthesis.speak(msg);
        
      });
    }
  });
}

