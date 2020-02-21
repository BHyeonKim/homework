import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import coursesRouter from "./routers/coursesRouter";
// import apiRouter from "./routers/apiRouter";
// import apiV1Router from "./routers/apiV1Router";
// import apiV2Router from "./routers/apiV2Router";

const app = express();

app.use(routes.home, globalRouter);

app.use(routes.courses, coursesRouter);
// app.use(routes.new, coursesRouter);
// app.use(routes.mine, coursesRouter);

// app.use(routes.documentation, apiRouter);

// app.use(routes.buy, apiV1Router);
// app.use(routes.refund, apiV1Router);

// app.use(routes.remove, apiV2Router);
// app.use(routes.edit, apiV2Router);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
