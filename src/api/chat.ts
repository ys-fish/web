import axios from "axios";

export const ChatGptApi = async () => {
  const data = await axios.post("https://chatgpt-api.shn.hk/v1/", {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello, how are you?" }],
  });

  console.log(data)
};
