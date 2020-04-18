const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "kfgj374ccsy2",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:
    "d165454ed2486dd20fe741fa7b01fcd575f5bd0c11d78fbc065603c3cf11e941"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

export const getEntry = entryID => {
  return client.getEntry(entryID);
};
