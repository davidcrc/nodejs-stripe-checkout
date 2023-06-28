import app from "./app";
import { PORT } from "./const";

app.listen(PORT, () => {
  console.log("Server on port", PORT);
});
