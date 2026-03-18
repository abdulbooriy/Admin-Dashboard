import { spawn } from "child_process";

const port = process.env.PORT || 3001;

const child = spawn(
  "node_modules/.bin/json-server",
  ["db.json", "--port", String(port)],
  { stdio: "inherit", shell: true },
);

child.on("exit", (code) => process.exit(code ?? 0));
