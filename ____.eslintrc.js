module.exports = {
  parser: '@typescript-eslint/parser',  // Use the TypeScript parser for ESLint
  extends: [
    'eslint:recommended',              // Use the recommended ESLint rules
    'plugin:@typescript-eslint/recommended',  // Use recommended rules from @typescript-eslint
    'plugin:react/recommended',         // Use recommended rules from eslint-plugin-react
  ],
  plugins: [
    '@typescript-eslint',              // Add TypeScript support
    'react',                           // Add React support
  ],
  rules: {
    // Basic rules to catch common mistakes
    'no-console': 'warn',               // Allow console statements but show a warning
    'no-debugger': 'warn',              // Allow debugger statements but show a warning
    'no-unused-vars': 'warn',           // Warn about unused variables but do not error
    'no-shadow': 'off',                 // Turn off the no-shadow rule
    'no-empty': 'warn',                 // Warn about empty blocks, but don't enforce
    'no-undef': 'warn',                 // Warn about undefined variables but don't enforce

    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': 'warn',  // Warn about unused variables in TypeScript
    '@typescript-eslint/no-explicit-any': 'off',  // Allow usage of 'any' type in TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Don't require explicit return types on functions

    // React-specific rules
    'react/prop-types': 'off',          // Turn off prop-types as we're using TypeScript
    'react/react-in-jsx-scope': 'off',  // Not required in React 17+
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }], // Warn if JSX is used in non-JSX/TSX files

    // Import rules
    'import/no-extraneous-dependencies': 'off',  // Turn off import dependency checks
    'import/prefer-default-export': 'off',       // Allow single named exports

    // Formatting rules - leave these to Prettier or personal choice
    'indent': 'off',                             // Turn off indent rule
    'linebreak-style': 'off',                    // Turn off linebreak-style rule
    'quotes': 'off',                             // Turn off quotes rule
    'semi': 'off',                               // Turn off semicolon rule
  },
  parserOptions: {
    ecmaVersion: 2022,                   // Allow parsing of modern ECMAScript features
    sourceType: 'module',                // Allow the use of imports
    ecmaFeatures: {
      jsx: true,                         // Allow the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect',                 // Automatically detect the React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Resolve these extensions
        moduleDirectory: ['node_modules', 'src/'],   // Look in these directories
      },
      typescript: {},  // Use the TypeScript resolver to resolve paths
    },
  },
  env: {
    browser: true,                       // Browser global variables
    es2021: true,                        // Add all ECMAScript 2021 globals and automatically set the ecmaVersion parser option to 12
    node: true,                          // Node.js global variables and Node.js scoping
  },
};
