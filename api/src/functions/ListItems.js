const { app } = require("@azure/functions")

app.http("list", {
  methods: ["GET", "POST"],
  authLevel: "anonymouse",
  handler: async (request, context) => {
    return { body: "Hello, from the API!" }
  }
})
