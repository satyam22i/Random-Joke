import express from 'express';
import axios from 'axios';


const app = express();
const port = 5050;

app.use(express.static("public"));








app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://v2.jokeapi.dev/joke//any");
    res.render("index.ejs", { joke: result.data.setup, ans: result.data.delivery });
  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).send("Something went wrong");
  }
});






app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})