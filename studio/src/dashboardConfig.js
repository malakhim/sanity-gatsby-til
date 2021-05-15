export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609fc5d17b087ddd7cb8a38c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-til-studio",
                  apiId: "f5233539-6e09-4b14-8da6-e5b4ebc0383f",
                },
                {
                  buildHookId: "609fc5d2ea0d21fd869cbc82",
                  title: "Blog Website",
                  name: "sanity-gatsby-til",
                  apiId: "1368ce78-7b8c-49a5-a520-7368044818a9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/malakhim/sanity-gatsby-til",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-til.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
