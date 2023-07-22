module.exports = ({env}) => [
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL"),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL"),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
