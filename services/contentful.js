const contentful = require("contentful");
const client = contentful.createClient({
  space: "kfgj374ccsy2",
  accessToken:
    "7f3b9d4d5587ac6057284dba5706ecefc294f82da91f8f9cc46d17121210ff71",
  host: "preview.contentful.com"
});

export const getEntry = entryId => {
  return client.getEntry(entryId);
};
