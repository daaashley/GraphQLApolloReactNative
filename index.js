const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const MyGraphQLSchema = require("./schema");
const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
  })
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server Started on port ${port}`));
