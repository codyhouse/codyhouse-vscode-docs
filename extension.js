// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let codyhouseDocsGetStarted = vscode.commands.registerCommand('extension.codyhouseDocsGetStarted', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/get-started'));
	});
	context.subscriptions.push(codyhouseDocsGetStarted);
	let codyhouseDocsFramework = vscode.commands.registerCommand('extension.codyhouseDocsFramework', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework'));
	});
	context.subscriptions.push(codyhouseDocsFramework);
	let codyhouseDocsAccessibility = vscode.commands.registerCommand('extension.codyhouseDocsAccessibility', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/accessibility'));
	});
	context.subscriptions.push(codyhouseDocsAccessibility);
	let codyhouseDocsBreakpoints = vscode.commands.registerCommand('extension.codyhouseDocsBreakpoints', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/breakpoints'));
	});
	context.subscriptions.push(codyhouseDocsBreakpoints);
	let codyhouseDocsButtons = vscode.commands.registerCommand('extension.codyhouseDocsButtons', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/buttons'));
	});
	context.subscriptions.push(codyhouseDocsButtons);
	let codyhouseDocsColors = vscode.commands.registerCommand('extension.codyhouseDocsColors', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors'));
	});
	context.subscriptions.push(codyhouseDocsColors);
	let codyhouseDocsForms = vscode.commands.registerCommand('extension.codyhouseDocsForms', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/forms'));
	});
	context.subscriptions.push(codyhouseDocsForms);
	let codyhouseDocsGrid = vscode.commands.registerCommand('extension.codyhouseDocsGrid', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/grid-layout'));
	});
	context.subscriptions.push(codyhouseDocsGrid);
	let codyhouseDocsIcons = vscode.commands.registerCommand('extension.codyhouseDocsIcons', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/icons'));
	});
	context.subscriptions.push(codyhouseDocsIcons);
	let codyhouseDocsMixins = vscode.commands.registerCommand('extension.codyhouseDocsMixins', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/mixins'));
	});
	context.subscriptions.push(codyhouseDocsMixins);
	let codyhouseDocsReset = vscode.commands.registerCommand('extension.codyhouseDocsReset', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/reset'));
	});
	context.subscriptions.push(codyhouseDocsReset);
	let codyhouseDocsSharedStyle = vscode.commands.registerCommand('extension.codyhouseDocsSharedStyle', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/shared-styles'));
	});
	context.subscriptions.push(codyhouseDocsSharedStyle);
	let codyhouseDocsSpacing = vscode.commands.registerCommand('extension.codyhouseDocsSpacing', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/spacing'));
	});
	context.subscriptions.push(codyhouseDocsSpacing);
	let codyhouseDocsTypography = vscode.commands.registerCommand('extension.codyhouseDocsTypography', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography'));
	});
	context.subscriptions.push(codyhouseDocsTypography);
	let codyhouseDocsUtilities = vscode.commands.registerCommand('extension.codyhouseDocsUtilities', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities'));
	});
	context.subscriptions.push(codyhouseDocsUtilities);
	let codyhouseDocsUtilitiesFlex = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFlex', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#flexbox'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesFlex);
	let codyhouseDocsUtilitiesJustify = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesJustify', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#justify-content'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesJustify);
	let codyhouseDocsUtilitiesAlign = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesAlign', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#align-items'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesAlign);
	let codyhouseDocsUtilitiesOrder = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesOrder', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#order'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesOrder);
	let codyhouseDocsUtilitiesDisplay = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesDisplay', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#display'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesDisplay);
	let codyhouseDocsUtilitiesMargin = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMargin', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#margin'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMargin);
	let codyhouseDocsUtilitiesPadding = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPadding', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#padding'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesPadding);
	let codyhouseDocsUtilitiesVAlignment = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesVAlignment', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#vertical-alignment'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesVAlignment);
	let codyhouseDocsUtilitiesTypography = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTypography', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#typography'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesTypography);
	let codyhouseDocsUtilitiesFontSize = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontSize', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#font-size'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesFontSize);
	let codyhouseDocsUtilitiesFontWeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontWeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#font-weight'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesFontWeight);
	let codyhouseDocsUtilitiesFontFamily = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontFamily', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#font-family'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesFontFamily);
	let codyhouseDocsUtilitiesFontStyle = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontStyle', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#font-style'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesFontStyle);
	let codyhouseDocsUtilitiesTextAlign = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextAlign', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#text-align'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesTextAlign);
	let codyhouseDocsUtilitiesTextTransform = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextTransform', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#text-transform'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesTextTransform);
	let codyhouseDocsUtilitiesLetterSpacing = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesLetterSpacing', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#letter-spacing'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesLetterSpacing);
	let codyhouseDocsUtilitiesTextDecoration = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextDecoration', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#text-decoration'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesTextDecoration);
	let codyhouseDocsUtilitiesLineHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesLineHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#line-height'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesLineHeight);
	let codyhouseDocsUtilitiesVerticalSpacing = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesVerticalSpacing', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#v-space'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesVerticalSpacing);
	let codyhouseDocsUtilitiesTypographyMisc = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTypographyMisc', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#misc'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesTypographyMisc);
	let codyhouseDocsUtilitiesWhiteSpace = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesWhiteSpace', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#white-space'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesWhiteSpace);
	let codyhouseDocsUtilitiesCursor = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesCursor', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#cursor'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesCursor);
	let codyhouseDocsUtilitiesColor = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesColor', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#color'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesColor);
	let codyhouseDocsUtilitiesWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#width'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesWidth);
	let codyhouseDocsUtilitiesHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#height'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesHeight);
	let codyhouseDocsUtilitiesMaxHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMaxHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#max-height'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMaxHeight);
	let codyhouseDocsUtilitiesMaxWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMaxWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#max-width'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMaxWidth);
	let codyhouseDocsUtilitiesMinWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMinWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#min-width'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMinWidth);
	let codyhouseDocsUtilitiesMinHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMinHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#min-height'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMinHeight);
	let codyhouseDocsUtilitiesMixBlendMode = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMixBlendMode', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#mix-blend-mode'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMixBlendMode);
	let codyhouseDocsUtilitiesPosition = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPosition', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#position'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesPosition);
	let codyhouseDocsUtilitiesZIndex = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesZIndex', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#z-index'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesZIndex);
	let codyhouseDocsUtilitiesOverflow = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesOverflow', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#overflow'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesOverflow);
	let codyhouseDocsUtilitiesOpacity = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesOpacity', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#opacity'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesOpacity);
	let codyhouseDocsUtilitiesBackdrop = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBackdrop', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#backdrop-filter'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesBackdrop);
	let codyhouseDocsUtilitiesBackground = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBackground', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#background'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesBackground);
	let codyhouseDocsUtilitiesBorders = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBorders', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#borders'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesBorders);
	let codyhouseDocsUtilitiesBorderRadius = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBorderRadius', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#radius'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesBorderRadius);
	let codyhouseDocsUtilitiesBoxShadow = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBoxShadow', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#shadow'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesBoxShadow);
	let codyhouseDocsUtilitiesMediaWrapper = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMediaWrapper', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#media-wrapper'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMediaWrapper);
	let codyhouseDocsUtilitiesFloat = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFloat', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#float'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesFloat);
	let codyhouseDocsUtilitiesObjectFit = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesObjectFit', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#object-fit'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesObjectFit);
	let codyhouseDocsUtilitiesPointerEvents = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPointerEvents', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#pointer-events'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesPointerEvents);
	let codyhouseDocsUtilitiesUserSelect = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesUserSelect', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#user-select'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesUserSelect);
	let codyhouseDocsUtilitiesTransform = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTransform', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#transform'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesTransform);
	let codyhouseDocsUtilitiesVisibility = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesVisibility', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#visibility'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesVisibility);
	let codyhouseDocsUtilitiesSpacing = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesSpacing', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#spacing'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesSpacing);
	let codyhouseDocsUtilitiesTextShadow = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextShadow', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#text-shadow'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesTextShadow);
	let codyhouseDocsVisibility = vscode.commands.registerCommand('extension.codyhouseDocsVisibility', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/visibility'));
	});
	context.subscriptions.push(codyhouseDocsVisibility);
	let codyhouseDocsZIndex = vscode.commands.registerCommand('extension.codyhouseDocsZIndex', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/z-index'));
	});
	context.subscriptions.push(codyhouseDocsZIndex);
	let codyhouseDocsJsUtil = vscode.commands.registerCommand('extension.codyhouseDocsJsUtil', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/js-utilities'));
	});
	context.subscriptions.push(codyhouseDocsJsUtil);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
