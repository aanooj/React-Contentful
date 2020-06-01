const contentful = require("contentful");
const client = contentful.createClient({
  space: "a16f55ul0o84",
  accessToken: "z2Lx6amXaDFPqR_PF4rhI5O-gwqHYxQzPkEDJtcDHq0",
  host: "preview.contentful.com"
});

export const getEntry = entryId => {
  return client.getEntry(entryId);
};
