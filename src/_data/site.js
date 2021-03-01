require("dotenv").config();

const ghostContentAPI = require("@tryghost/content-api");

// Init Ghost API
const api = new ghostContentAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: "v3",
});

const isValidURL = function (string) {
    var res = string.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
};

const transformUrl = function (url) {
    return isValidURL(url) ? url : "/blog/" + url.replace("/", "");
};

// Get all site information
module.exports = async function () {
    let siteData = await api.settings
        .browse({
            include: "icon,url",
        })
        .catch((err) => {
            console.error(err);
        });

    if (process.env.SITE_URL) siteData.url = process.env.SITE_URL;

    siteData.navigation.map((doc) => {
        doc.url = transformUrl(doc.url);
        return doc;
    });

    return siteData;
};
