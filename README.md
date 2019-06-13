# eslint-plugin-rails-erb

This plugin is designed to allow for the linting of `*.js.erb` files in a Ruby on Rails application by processing the file text to remove any Rails code in the javascript file.

## Installation

1) You'll need to install [ESLint](http://eslint.org):

```
$ yarn add eslint --dev
```

2) Initialize eslint and your `.eslintrc.js` configuration file:

```
yarn eslint --init
```

3) Since this repo is not published to npm, you'll need to clone it to your local machine:

```
git clone git@github.com:jhaffey259/eslint-plugin-rails-erb.git
```

3) Install the `eslint-plugin-rails-erb` package from your local repo:

```
$ yarn add ~/path/to/eslint-plugin-rails-erb --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-rails-erb` globally.

## Usage

1) Add `rails-erb` to the plugins section of your `.eslintrc.js` configuration file. You can omit the `eslint-plugin-` prefix:

```json
module.exports = {
    ...,
    'plugins': [
        'rails-erb'
    ]
}
```

2) Run ESLint!

```
yarn eslint **/*.js.erb
```
