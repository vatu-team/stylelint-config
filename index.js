'use strict';

module.exports = {
	plugins: [
		'stylelint-no-unsupported-browser-features',
	],
	extends: [
		'stylelint-config-property-sort-order-smacss',
		'stylelint-config-standard-scss',
		'stylelint-config-recommended',
	],
	rules: {
		'plugin/no-unsupported-browser-features': [
			true,
			{
				'severity': 'warning',
			}
		],
		'alpha-value-notation': [
			'percentage',
			{
				exceptProperties: [
					'opacity',
				],
			},
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'blockless-after-same-name-blockless',
					'first-nested',
				],
				ignore: [
					'after-comment',
				],
			},
		],
		'at-rule-name-case': 'lower',
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-no-vendor-prefix': true,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'use'
				]
			}
		],
		'at-rule-semicolon-newline-after': 'always',
		'block-closing-brace-empty-line-before': [
			'never',
			{
				except: [
					'after-closing-brace',
				],
			}
		],
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-before': 'always-single-line',
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',
		'color-function-notation': 'modern',
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'comment-empty-line-before': [
			'always',
			{
				except: [
					'first-nested',
				],
				ignore: [
					'stylelint-commands',
				],
			},
		],
		'comment-whitespace-inside': 'always',
		'custom-property-empty-line-before': [
			'always',
			{
				except: [
					'after-custom-property',
					'first-nested'
				],
				ignore: [
					'after-comment',
					'inside-single-line-block',
				],
			},
		],
		'custom-property-pattern': null,
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-redundant-longhand-properties': null,
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': [
			'always',
			{
				except: [
					'after-declaration',
					'first-nested',
				],
				ignore: [
					'after-comment',
					'inside-single-line-block',
				],
			},
		],
		'font-family-name-quotes': 'always-where-recommended',
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'always-single-line',
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',
		'hue-degree-notation': 'angle',
		'indentation': 'tab',
		'length-zero-no-unit': true,
		'max-empty-lines': 1,
		'max-line-length': [
			120,
			{
				'severity': 'warning',
			}
		],
		'max-nesting-depth': null,
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-parentheses-space-inside': 'always',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',
		'no-descending-specificity': [
			true,
			{
				'severity': 'warning',
				ignore: [
					'selectors-within-list',
				],
			}
		],
		'no-duplicate-selectors': [
			true,
			{
				'severity': 'warning',
			}
		],
		'no-empty-first-line': true,
		'no-eol-whitespace': true,
		'no-irregular-whitespace': true,
		'no-missing-end-of-source-newline': true,
		'number-leading-zero': 'always',
		'number-max-precision': [
			4,
			{
				'severity': 'warning',
			}
		],
		'number-no-trailing-zeros': true,
		'property-case': 'lower',
		'property-no-vendor-prefix': [
			true,
			{
				'severity': 'warning',
				'disableFix': true,
			}
		],
		'rule-empty-line-before': [
			'always-multi-line',
			{
				ignore: [
					'after-comment',
				],
			},
		],
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': "",
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-id-pattern': null,
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-space-before': 'never',
		'selector-max-empty-lines': 0,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'always',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
		'shorthand-property-no-redundant-values': true,
		'string-quotes': 'double',
		'unit-case': 'lower',
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
		'value-no-vendor-prefix': true,
		'scss/dollar-variable-pattern': null,
	}
};
