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
	let codyhouseDocsColorsVariables = vscode.commands.registerCommand('extension.codyhouseDocsColorsVariables', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors#variables'));
	});
	context.subscriptions.push(codyhouseDocsColorsVariables);
	let codyhouseDocsColorsMain = vscode.commands.registerCommand('extension.codyhouseDocsColorsMain', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors#main'));
	});
	context.subscriptions.push(codyhouseDocsColorsMain);
	let codyhouseDocsColorsFeedback = vscode.commands.registerCommand('extension.codyhouseDocsColorsFeedback', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors#feedback'));
	});
	context.subscriptions.push(codyhouseDocsColorsFeedback);
	let codyhouseDocsColorsContrast = vscode.commands.registerCommand('extension.codyhouseDocsColorsContrast', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors#contrast'));
	});
	context.subscriptions.push(codyhouseDocsColorsContrast);
	let codyhouseDocsColorsBlackWhite = vscode.commands.registerCommand('extension.codyhouseDocsColorsBlackWhite', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors#black-white'));
	});
	context.subscriptions.push(codyhouseDocsColorsBlackWhite);
	let codyhouseDocsColorsThemes = vscode.commands.registerCommand('extension.codyhouseDocsColorsThemes', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors#themes'));
	});
	context.subscriptions.push(codyhouseDocsColorsThemes);
	let codyhouseDocsColorsFunctions = vscode.commands.registerCommand('extension.codyhouseDocsColorsFunctions', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/colors#functions'));
	});
	context.subscriptions.push(codyhouseDocsColorsFunctions);
	let codyhouseDocsForms = vscode.commands.registerCommand('extension.codyhouseDocsForms', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/forms'));
	});
	context.subscriptions.push(codyhouseDocsForms);
	let codyhouseDocsGrid = vscode.commands.registerCommand('extension.codyhouseDocsGrid', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/grid-layout'));
	});
	context.subscriptions.push(codyhouseDocsGrid);
	let codyhouseDocsGridContainer = vscode.commands.registerCommand('extension.codyhouseDocsGridContainer', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/grid-layout#container'));
	});
	context.subscriptions.push(codyhouseDocsGridContainer);
	let codyhouseDocsGridMaxWidth = vscode.commands.registerCommand('extension.codyhouseDocsGridMaxWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/grid-layout#max-width'));
	});
	context.subscriptions.push(codyhouseDocsGridMaxWidth);
	let codyhouseDocsGridFlexSystem = vscode.commands.registerCommand('extension.codyhouseDocsGridFlexSystem', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/grid-layout#flex-grid-system'));
	});
	context.subscriptions.push(codyhouseDocsGridFlexSystem);
	let codyhouseDocsGridGridSystem = vscode.commands.registerCommand('extension.codyhouseDocsGridGridSystem', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/grid-layout#grid-system'));
	});
	context.subscriptions.push(codyhouseDocsGridGridSystem);
	let codyhouseDocsIcons = vscode.commands.registerCommand('extension.codyhouseDocsIcons', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/icons'));
	});
	context.subscriptions.push(codyhouseDocsIcons);
	let codyhouseDocsMixins = vscode.commands.registerCommand('extension.codyhouseDocsMixins', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/mixins'));
	});
	context.subscriptions.push(codyhouseDocsMixins);
	let codyhouseDocsMixinsColors = vscode.commands.registerCommand('extension.codyhouseDocsMixinsColors', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/mixins#colors'));
	});
	context.subscriptions.push(codyhouseDocsMixinsColors);
	let codyhouseDocsMixinsTypography = vscode.commands.registerCommand('extension.codyhouseDocsMixinsTypography', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/mixins#typography'));
	});
	context.subscriptions.push(codyhouseDocsMixinsTypography);
	let codyhouseDocsMixinsSpace = vscode.commands.registerCommand('extension.codyhouseDocsMixinsSpace', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/mixins#space'));
	});
	context.subscriptions.push(codyhouseDocsMixinsSpace);
	let codyhouseDocsMixinsMisc = vscode.commands.registerCommand('extension.codyhouseDocsMixinsMisc', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/mixins#misc'));
	});
	context.subscriptions.push(codyhouseDocsMixinsMisc);
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
	let codyhouseDocsTypographyFontFamily = vscode.commands.registerCommand('extension.codyhouseDocsTypographyFontFamily', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#font-family'));
	});
	context.subscriptions.push(codyhouseDocsTypographyFontFamily);
	let codyhouseDocsTypographyTypeScale = vscode.commands.registerCommand('extension.codyhouseDocsTypographyTypeScale', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#type-scale'));
	});
	context.subscriptions.push(codyhouseDocsTypographyTypeScale);
	let codyhouseDocsTypographyTextComponent = vscode.commands.registerCommand('extension.codyhouseDocsTypographyTextComponent', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#text-component'));
	});
	context.subscriptions.push(codyhouseDocsTypographyTextComponent);
	let codyhouseDocsTypographyVerticalSpacing = vscode.commands.registerCommand('extension.codyhouseDocsTypographyVerticalSpacing', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#vertical-spacing'));
	});
	context.subscriptions.push(codyhouseDocsTypographyVerticalSpacing);
	let codyhouseDocsTypographyBlock = vscode.commands.registerCommand('extension.codyhouseDocsTypographyBlock', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#block'));
	});
	context.subscriptions.push(codyhouseDocsTypographyBlock);
	let codyhouseDocsTypographyTextSize = vscode.commands.registerCommand('extension.codyhouseDocsTypographyTextSize', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#text-size'));
	});
	context.subscriptions.push(codyhouseDocsTypographyTextSize);
	let codyhouseDocsTypographyLHCrop = vscode.commands.registerCommand('extension.codyhouseDocsTypographyLHCrop', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#lh-crop'));
	});
	context.subscriptions.push(codyhouseDocsTypographyLHCrop);
	let codyhouseDocsTypographyUtilities = vscode.commands.registerCommand('extension.codyhouseDocsTypographyUtilities', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/typography#utilities'));
	});
	context.subscriptions.push(codyhouseDocsTypographyUtilities);
	let codyhouseDocsUtilities = vscode.commands.registerCommand('extension.codyhouseDocsUtilities', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities'));
	});
	context.subscriptions.push(codyhouseDocsUtilities);
	let codyhouseDocsUtilitiesFlex = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFlex', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#flexbox'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesFlex);
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
	let codyhouseDocsUtilitiesMaxWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMaxWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#max-width'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMaxWidth);
	let codyhouseDocsUtilitiesMinWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMinWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#min-width'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesMinWidth);
	let codyhouseDocsUtilitiesPosition = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPosition', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#position'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesPosition);
	let codyhouseDocsUtilitiesOverflow = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesOverflow', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/utilities#overflow'));
	});
	context.subscriptions.push(codyhouseDocsUtilitiesOverflow);
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
	let codyhouseDocsVisibility = vscode.commands.registerCommand('extension.codyhouseDocsVisibility', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/visibility'));
	});
	context.subscriptions.push(codyhouseDocsVisibility);
	let codyhouseDocsVisibilityDisplayHide = vscode.commands.registerCommand('extension.codyhouseDocsVisibilityDisplayHide', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/visibility#display-hide'));
	});
	context.subscriptions.push(codyhouseDocsVisibilityDisplayHide);
	let codyhouseDocsVisibilityVisibleHidden = vscode.commands.registerCommand('extension.codyhouseDocsVisibilityVisibleHidden', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/visibility#visible-hidden'));
	});
	context.subscriptions.push(codyhouseDocsVisibilityVisibleHidden);
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
