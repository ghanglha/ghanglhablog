// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "87f90816-610c-458c-a3c7-6dee2d18037f",
  // Get this from tina.io
  token: "b77775cfc4609cb7c3ec4333c06fc65545f70c63",
  // Get this from tina.io
  build: {
    outputFolder: "_sites",
    publicFolder: "assets"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: ""
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            required: true
          },
          {
            type: "rich-text",
            name: "excerpt",
            label: "Excerpt",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  },
  search: {
    tina: {
      indexerToken: "ddd15c985f5c40668f3104cbb28bba2e01416dbc",
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  }
});
export {
  config_default as default
};
