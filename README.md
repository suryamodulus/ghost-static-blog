# Ghost Static Blog

# Installing

```bash
# From Source
git clone https://github.com/suryamodulus/ghost-static-blog.git
cd ghost-static-blog
```

Then install dependencies

```bash
yarn
```

# Running

Start the development server

```bash
yarn start
```

You now have a completely static site pulling content from Ghost running as a headless CMS.

By default, the starter will populate content from a default Ghost install located at https://eleventy.ghost.io.

To use your own install, edit the `.env` config file with your credentials. You can find your `contentApiKey` in the "Integrations" screen in Ghost Admin. The minimum required version for Ghost is `2.10.0` in order to use this starter without issues.

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Eleventy front-end becomes the source of truth for SEO.

# Run in Production

```bash
# Build the site locally
yarn build
```

# Copyright & License

Copyright (c) Surya T - Released under the [MIT license](LICENSE).
