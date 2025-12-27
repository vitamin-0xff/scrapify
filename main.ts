import express from "npm:express";
import cors from "cors";

const app = express();
app.use("json", express.json());
app.use(cors());

// Enable JSON parsing
app.use(express.json());

app.post("/make-request", async (_req, res) => {
  const {url} = _req.query
  const {root, ...otherParams} = _req.body;

  if(!url || typeof url !== "string") {
    res.status(400).send({"message": "Missing or invalid 'url' query parameter"});
    return;
  }
  const response = await fetch(url);
  if(response.status !== 200) {
    res.status(200).send({"message": `Failed to fetch the URL: ${url} returned status ${response.status}`});
    return;
  }

  console.log(await response.text());
  console.log(`Making request to: ${url}`);
  res.send({"message": "Hello from Express on Deno"});
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});