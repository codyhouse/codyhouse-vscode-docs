// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
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
  
  let codyhouseDocsReset = vscode.commands.registerCommand('extension.codyhouseDocsReset', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/reset'));
	});
	context.subscriptions.push(codyhouseDocsReset);
  
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
  
  let codyhouseDocsUtilitiesAlignItems = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesAlignItems', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-align-items'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesAlignItems);

  let codyhouseDocsUtilitiesAlignContent = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesAlignContent', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-align-content'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesAlignContent);

  let codyhouseDocsUtilitiesAspectRatio = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesAspectRatio', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-aspect-ratio'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesAspectRatio);

  let codyhouseDocsUtilitiesBackdropFilter = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBackdropFilter', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-backdrop-filter'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesBackdropFilter);

  let codyhouseDocsUtilitiesBackground = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBackground', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-background'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesBackground);

  let codyhouseDocsUtilitiesBorder = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBorder', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-border'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesBorder);

  let codyhouseDocsUtilitiesBorderRadius = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBorderRadius', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-border-radius'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesBorderRadius);

  let codyhouseDocsUtilitiesBoxShadow = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesBoxShadow', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-box-shadow'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesBoxShadow);

  let codyhouseDocsUtilitiesColor = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesColor', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-color'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesColor);

  let codyhouseDocsUtilitiesColumnCount = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesColumnCount', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-column-count'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesColumnCount);

  let codyhouseDocsUtilitiesCursor = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesCursor', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-cursor'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesCursor);

  let codyhouseDocsUtilitiesDisplay = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesDisplay', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-display'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesDisplay);

  let codyhouseDocsUtilitiesFlexbox = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFlexbox', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-flexbox'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesFlexbox);

  let codyhouseDocsUtilitiesFloat = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFloat', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-float'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesFloat);

  let codyhouseDocsUtilitiesFontFamily = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontFamily', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-font-family'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesFontFamily);

  let codyhouseDocsUtilitiesFontSize = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontSize', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-font-size'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesFontSize);

  let codyhouseDocsUtilitiesFontStyle = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontStyle', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-font-style'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesFontStyle);

  let codyhouseDocsUtilitiesFontWeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesFontWeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-font-weight'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesFontWeight);

  let codyhouseDocsUtilitiesGap = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesGap', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-gap'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesGap);

  let codyhouseDocsUtilitiesHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-height'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesHeight);

  let codyhouseDocsUtilitiesJustifyContent = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesJustifyContent', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-justify-content'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesJustifyContent);

  let codyhouseDocsUtilitiesLetterSpacing = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesLetterSpacing', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-letter-spacing'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesLetterSpacing);

  let codyhouseDocsUtilitiesLineClamp = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesLineClamp', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-line-clamp'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesLineClamp);

  let codyhouseDocsUtilitiesLineHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesLineHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-line-height'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesLineHeight);

  let codyhouseDocsUtilitiesListStyle = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesListStyle', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-list-style'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesListStyle);

  let codyhouseDocsUtilitiesMargin = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMargin', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-margin'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesMargin);

  let codyhouseDocsUtilitiesMaxHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMaxHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-max-height'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesMaxHeight);

  let codyhouseDocsUtilitiesMaxWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMaxWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-max-width'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesMaxWidth);

  let codyhouseDocsUtilitiesMinHeight = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMinHeight', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-min-height'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesMinHeight);

  let codyhouseDocsUtilitiesMinWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMinWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-min-width'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesMinWidth);

  let codyhouseDocsUtilitiesMixBlendMode = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesMixBlendMode', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-mix-blend-mode'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesMixBlendMode);

  let codyhouseDocsUtilitiesObjectFit = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesObjectFit', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-object-fit'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesObjectFit);

  let codyhouseDocsUtilitiesOpacity = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesOpacity', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-opacity'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesOpacity);

  let codyhouseDocsUtilitiesOrder = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesOrder', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-order'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesOrder);

  let codyhouseDocsUtilitiesOverflow = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesOverflow', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-overflow'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesOverflow);

  let codyhouseDocsUtilitiesPadding = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPadding', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-padding'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesPadding);

  let codyhouseDocsUtilitiesPerspective = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPerspective', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-perspective'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesPerspective);

  let codyhouseDocsUtilitiesPointerEvents = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPointerEvents', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-pointer-events'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesPointerEvents);

  let codyhouseDocsUtilitiesPosition = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesPosition', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-position'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesPosition);

  let codyhouseDocsUtilitiesScrollBehavior = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesScrollBehavior', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-scroll-behavior'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesScrollBehavior);

	let codyhouseDocsUtilitiesSVG = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesSVG', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-svg'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesSVG);

  let codyhouseDocsUtilitiesTextAlign = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextAlign', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-text-align'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesTextAlign);

  let codyhouseDocsUtilitiesTextDecoration = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextDecoration', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-text-decoration'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesTextDecoration);

  let codyhouseDocsUtilitiesTextIndent = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextIndent', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-text-indent'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesTextIndent);

  let codyhouseDocsUtilitiesTextShadow = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextShadow', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-text-shadow'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesTextShadow);

  let codyhouseDocsUtilitiesTextTransform = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTextTransform', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-text-transform'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesTextTransform);

  let codyhouseDocsUtilitiesTransform = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTransform', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-transform'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesTransform);

  let codyhouseDocsUtilitiesTypographyMisc = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesTypographyMisc', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-misc-text'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesTypographyMisc);

  let codyhouseDocsUtilitiesUserSelect = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesUserSelect', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-user-select'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesUserSelect);

  let codyhouseDocsUtilitiesVerticalAlign = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesVerticalAlign', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-vertical-align'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesVerticalAlign);

  let codyhouseDocsUtilitiesVisibility = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesVisibility', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-visibility'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesVisibility);

  let codyhouseDocsUtilitiesWhiteSpace = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesWhiteSpace', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-white-space'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesWhiteSpace);

  let codyhouseDocsUtilitiesWidth = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesWidth', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-width'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesWidth);

  let codyhouseDocsUtilitiesZIndex = vscode.commands.registerCommand('extension.codyhouseDocsUtilitiesZIndex', function () {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://codyhouse.co/ds/docs/framework/util-z-index'));
	});
  context.subscriptions.push(codyhouseDocsUtilitiesZIndex);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
