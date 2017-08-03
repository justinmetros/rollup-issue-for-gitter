# Rollup Issue with External Jquery

### Issue:
I would like to keep jQuery as an external dependency, but some jQuery plugins ( [Slick](https://www.npmjs.com/package/slick-carousel) in this case ) have a require('jquery') statement in them.

### Getting Started

Clone this repository and install its dependencies:

```
npm install
npm run build
npm start
```

### Reproducing Issue

Run `npm run build` then `npm start`

[slick-carousel](https://www.npmjs.com/package/slick-carousel) installs jquery as a dependency in node_modules.

If you run the above with `external: ['jquery']` ( line 30 ) of rollup.config.js it will not work.

If you uncomment `external: ['jquery']` ( line 30 ) out, it will work. Either way in the above two scenarios, jQuery will be included in the bundle - slick is requiring it, and I'm doing something wrong to not catch it.

This is undesirable, as we want to use jQuery via a CDN in script tag.

If you `npm uninstall jquery` and turn the `external: ['jquery']` ( line 30 ) of rollup.config.js back on, and `npm run build` it will work correctly and jQuery will not be included in the build.

I'm pretty sure I am not understanding externals and globals correctly.

Any help greatly appreciated, as I'm really loving RollUp! :heart:
