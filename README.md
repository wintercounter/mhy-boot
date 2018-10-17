### Warning
> Tool in BETA version. Use the tool at your own risk.

# @mhy/boot
With `@mhy/boot` you'll be able to start codebases in the
current `src` directory.

# Templates
Currently @mhy/boot has a simple `default` template available,
but we're looking forward on having more templates
available in the long run.

### React Default Template
The current `default` template is a React project and it
contains the following structure:
```
- `components`: components directory
- `config`: app configuration directory
- `core`: app mpunting, routing and flux store directory
- `entities`: HTTP code related directory
- `fields`: app specific fields firectory
- `forms`: app specific forms and business logic directory
- `layouts`: is a container for a page to represent different
states of an application
- `overlays`: basically containers to construct a overlay's structure.
- `pages`: basically containers to construct a page's structure.
- `validators`: custom validator function for `react-redux-form`
- `index.js`: files are being used to export sub-modules for
easier/simplier/nicer imports.
```

## How to use it

```bash
# mhy boot <template-name>
# Example:
mhy boot default
# or:
# mhy boot
```