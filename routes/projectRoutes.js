import express from "express";
import { getProjects , getProjectsBySlug , createProject, } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:slug", getProjectsBySlug);
router.post("/", createProject);

export default router ;