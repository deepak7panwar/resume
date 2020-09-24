const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
module.exports = { withImages: withImages(), assetPrefix: "/resume/" ,withCSS:withCSS({})};
