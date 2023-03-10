// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "Colors",
  projectId: "zlmf9sgs",
  dataset: "production",
  apiHost: process.env.SANITY_STUDIO_API,
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
