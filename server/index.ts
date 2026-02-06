import { createApp, log } from "./app";

createApp()
  .then(({ httpServer }) => {
    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(
      {
        port,
        host: "0.0.0.0",
      },
      () => {
        log(`serving on port ${port}`);
      },
    );
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
