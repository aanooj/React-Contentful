const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "kfgj374ccsy2",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:
    "7f3b9d4d5587ac6057284dba5706ecefc294f82da91f8f9cc46d17121210ff71"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

export const getEntry = entryID => {
  return client.getEntry(entryID);
};
