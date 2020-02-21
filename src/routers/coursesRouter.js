import express from "express";
import routes from "../routes";
import { courses, _new, mine } from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get(routes.courses, courses);
coursesRouter.get(routes.new, _new);
coursesRouter.get(routes.mine, mine);

export default coursesRouter;
