import { fetch } from "undici";

const response = await fetch("https://example.com");
console.log(response.body);
