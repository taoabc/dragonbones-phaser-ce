module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
	parserOptions: {
		ecmaFeatures: {
			jsx: false
		},
		useJSXTextNode: false,
		project: './tsconfig.json',
		tsconfigRootDir: './'
	}
}