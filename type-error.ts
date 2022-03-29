import { fetch } from "undici";

fetch("https://example.com")
  .then(response => {
    console.log(response.body);
    response.body?.getReader();
  })
