import * as vscode from "vscode";
import DecorationManager from "./decorationManager";
import { SemanticCodeToken } from "./type";
import { pearsonHash, scaleHash, splitString } from "./util";

/* Variable naming / Term
 * - text
 * - subText
 * - token
 * - subToken
 * - *2dArray
 * - *3dArray
 */

/**
 * 01. Whole sub text with fade out gradient color by hash for unique sub text
 */
export function decorate_subText_fadeOutGradient_uniqueSubText(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const gradientColorDecorationTypesList =
    decorationManager.gradientColorDecorationType2dArray;

  const decorationRanges3dList: vscode.Range[][][] = Array.from(
    gradientColorDecorationTypesList,
    (subArray) => Array.from(subArray, () => []),
  );
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    let subTextStartCounter = token.start;

    // Process subText decoration
    const subTextArr = splitString(text);
    for (let indexTwo = 0; indexTwo < subTextArr.length; indexTwo++) {
      const subText = subTextArr[indexTwo];
      const subTextLength = subText.length;
      if (indexTwo === 0 || subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      const pearsonHashValue = pearsonHash(subText);
      const scaledHashValue = scaleHash(
        pearsonHashValue,
        gradientColorDecorationTypesList.length - 1,
      );
      const selectedGradientColorDecorationTypes =
        gradientColorDecorationTypesList[scaledHashValue];

      for (
        let indexThree = 0;
        indexThree < selectedGradientColorDecorationTypes.length;
        indexThree++
      ) {
        let gradientLevel = indexThree;
        if (gradientLevel >= subTextLength) {
          break;
        }
        const range = new vscode.Range(
          token.line,
          subTextStartCounter + indexThree,
          token.line,
          subTextStartCounter + indexThree + 1,
        );
        decorationRanges3dList[scaledHashValue][gradientLevel].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  const flatGradientColorDecorationTypesList =
    gradientColorDecorationTypesList.flat();
  const flatdecorationRanges3dList = decorationRanges3dList.flat();
  return [flatGradientColorDecorationTypesList, flatdecorationRanges3dList];
}

/**
 * 02. Whole sub text with fade out gradient color by hash for unique text
 */
export function decorate_subText_fadeOutGradient_uniqueText(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const gradientColorDecorationType2dArray =
    decorationManager.gradientColorDecorationType2dArray;

  const decorationRanges3dList: vscode.Range[][][] = Array.from(
    gradientColorDecorationType2dArray,
    (subArray) => Array.from(subArray, () => []),
  );
  // each token
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    const pearsonHashValue = pearsonHash(text);
    const scaledHashValue = scaleHash(
      pearsonHashValue,
      gradientColorDecorationType2dArray.length - 1,
    );
    const selectedGradientColorDecorationTypes =
      gradientColorDecorationType2dArray[scaledHashValue];

    // Process subText decoration
    let subTextStartCounter = token.start;
    const subTextArr = splitString(text);
    for (let indexTwo = 0; indexTwo < subTextArr.length; indexTwo++) {
      const subText = subTextArr[indexTwo];
      const subTextLength = subText.length;
      if (indexTwo === 0 || subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      for (
        let indexThree = 0;
        indexThree < selectedGradientColorDecorationTypes.length;
        indexThree++
      ) {
        let gradientLevel = indexThree;
        if (gradientLevel >= subTextLength) {
          break;
        }
        const range = new vscode.Range(
          token.line,
          subTextStartCounter + indexThree,
          token.line,
          subTextStartCounter + indexThree + 1,
        );
        decorationRanges3dList[scaledHashValue][gradientLevel].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  const flatGradientColorDecorationTypesList =
    gradientColorDecorationType2dArray.flat();
  const flatdecorationRanges3dList = decorationRanges3dList.flat();
  return [flatGradientColorDecorationTypesList, flatdecorationRanges3dList];
}

/**
 * 03. Whole sub text with fade out gradient color commonly
 */
export function decorate_subText_fadeOutGradient_commonly(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const gradientColorDecorationType2dArray =
    decorationManager.gradientColorDecorationType2dArray;
  const selectedGradientColorDecorationTypes =
    gradientColorDecorationType2dArray[0];

  const decorationRange2dArray: vscode.Range[][] = Array.from(
    { length: selectedGradientColorDecorationTypes.length },
    () => [],
  );
  // each token
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    let subTextStartCounter = token.start;

    // Process subText decoration
    const subTextArr = splitString(text);
    for (let indexTwo = 0; indexTwo < subTextArr.length; indexTwo++) {
      const subText = subTextArr[indexTwo];
      const subTextLength = subText.length;
      if (indexTwo === 0 || subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      for (
        let indexThree = 0;
        indexThree < selectedGradientColorDecorationTypes.length;
        indexThree++
      ) {
        let gradientLevel = indexThree;
        if (gradientLevel >= subTextLength) {
          break;
        }
        const range = new vscode.Range(
          token.line,
          subTextStartCounter + indexThree,
          token.line,
          subTextStartCounter + indexThree + 1,
        );
        decorationRange2dArray[gradientLevel].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  return [selectedGradientColorDecorationTypes, decorationRange2dArray];
}

/**
 * 04. Whole sub text with fade in gradient color by hash for unique sub text
 */
export function decorate_subText_fadeInGradient_uniqueSubText(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const gradientColorDecorationTypesList =
    decorationManager.gradientColorDecorationType2dArray;

  const decorationRanges3dList: vscode.Range[][][] = Array.from(
    gradientColorDecorationTypesList,
    (subArray) => Array.from(subArray, () => []),
  );
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    let subTextStartCounter = token.start;

    // Process subText decoration
    const subTextArr = splitString(text);
    for (let indexTwo = 0; indexTwo < subTextArr.length; indexTwo++) {
      const subText = subTextArr[indexTwo];
      const subTextLength = subText.length;
      if (indexTwo === 0 || subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      const pearsonHashValue = pearsonHash(subText);
      const scaledHashValue = scaleHash(
        pearsonHashValue,
        gradientColorDecorationTypesList.length - 1,
      );
      const selectedGradientColorDecorationTypes =
        gradientColorDecorationTypesList[scaledHashValue];

      for (
        let indexThree = 0;
        indexThree < selectedGradientColorDecorationTypes.length;
        indexThree++
      ) {
        let gradientLevel = indexThree;
        if (gradientLevel >= subTextLength) {
          break;
        }
        gradientLevel =
          selectedGradientColorDecorationTypes.length - gradientLevel - 1;
        const range = new vscode.Range(
          token.line,
          subTextStartCounter + indexThree,
          token.line,
          subTextStartCounter + indexThree + 1,
        );
        decorationRanges3dList[scaledHashValue][gradientLevel].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  const flatGradientColorDecorationTypesList =
    gradientColorDecorationTypesList.flat();
  const flatdecorationRanges3dList = decorationRanges3dList.flat();
  return [flatGradientColorDecorationTypesList, flatdecorationRanges3dList];
}

/**
 * 05. Whole sub text with fade in gradient color by hash for unique text
 */
export function decorate_subText_fadeInGradient_uniqueText(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const gradientColorDecorationType2dArray =
    decorationManager.gradientColorDecorationType2dArray;

  const decorationRanges3dList: vscode.Range[][][] = Array.from(
    gradientColorDecorationType2dArray,
    (subArray) => Array.from(subArray, () => []),
  );
  // each token
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    const pearsonHashValue = pearsonHash(text);
    const scaledHashValue = scaleHash(
      pearsonHashValue,
      gradientColorDecorationType2dArray.length - 1,
    );
    const selectedGradientColorDecorationTypes =
      gradientColorDecorationType2dArray[scaledHashValue];

    // Process subText decoration
    let subTextStartCounter = token.start;
    const subTextArr = splitString(text);
    for (let indexTwo = 0; indexTwo < subTextArr.length; indexTwo++) {
      const subText = subTextArr[indexTwo];
      const subTextLength = subText.length;
      if (indexTwo === 0 || subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      for (
        let indexThree = 0;
        indexThree < selectedGradientColorDecorationTypes.length;
        indexThree++
      ) {
        let gradientLevel = indexThree;
        if (gradientLevel >= subTextLength) {
          break;
        }
        gradientLevel =
          selectedGradientColorDecorationTypes.length - gradientLevel - 1;
        console.log("🚀 ~ gradientLevel:", gradientLevel);
        const range = new vscode.Range(
          token.line,
          subTextStartCounter + indexThree,
          token.line,
          subTextStartCounter + indexThree + 1,
        );
        decorationRanges3dList[scaledHashValue][gradientLevel].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  const flatGradientColorDecorationTypesList =
    gradientColorDecorationType2dArray.flat();
  const flatdecorationRanges3dList = decorationRanges3dList.flat();
  return [flatGradientColorDecorationTypesList, flatdecorationRanges3dList];
}

/**
 * 06. Whole sub text with fade in gradient color commonly
 */
export function decorate_subText_fadeInGradient_commonly(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const gradientColorDecorationType2dArray =
    decorationManager.gradientColorDecorationType2dArray;
  const selectedGradientColorDecorationTypes =
    gradientColorDecorationType2dArray[0];

  const decorationRange2dArray: vscode.Range[][] = Array.from(
    { length: selectedGradientColorDecorationTypes.length },
    () => [],
  );
  // each token
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    let subTextStartCounter = token.start;

    // Process subText decoration
    const subTextArr = splitString(text);
    for (let indexTwo = 0; indexTwo < subTextArr.length; indexTwo++) {
      const subText = subTextArr[indexTwo];
      const subTextLength = subText.length;
      if (indexTwo === 0 || subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      for (
        let indexThree = 0;
        indexThree < selectedGradientColorDecorationTypes.length;
        indexThree++
      ) {
        let gradientLevel = indexThree;
        if (gradientLevel >= subTextLength) {
          break;
        }
        gradientLevel =
          selectedGradientColorDecorationTypes.length - gradientLevel - 1;
        const range = new vscode.Range(
          token.line,
          subTextStartCounter + indexThree,
          token.line,
          subTextStartCounter + indexThree + 1,
        );
        decorationRange2dArray[gradientLevel].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  return [selectedGradientColorDecorationTypes, decorationRange2dArray];
}

/**
 * 07. First character of sub text with solid color by hash for unique sub text
 */
export function decorate_firstCharacter_solidColor_uniqueSubText(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const solidColorDecorationTypes = decorationManager.solidColorDecorationTypes;

  const decorationRangesList: vscode.Range[][] = Array.from(
    { length: solidColorDecorationTypes.length },
    () => [],
  );
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    let subTextStartCounter = token.start;

    // Process subText decoration
    const subTextArr = splitString(text);
    for (let j = 0; j < subTextArr.length; j++) {
      const subText = subTextArr[j];
      const subTextLength = subText.length;
      if (subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      const pearsonHashValue = pearsonHash(subText);
      const scaledHashValue = scaleHash(
        pearsonHashValue,
        solidColorDecorationTypes.length - 1,
      );
      const range = new vscode.Range(
        token.line,
        subTextStartCounter,
        token.line,
        subTextStartCounter + 1,
      );
      if (j > 0) {
        decorationRangesList[scaledHashValue].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  return [solidColorDecorationTypes, decorationRangesList];
}

/**
 * 08. First character of sub text with solid color by hash for unique text
 */
export function decorate_firstCharacter_solidColor_uniqueText(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const solidColorDecorationTypes = decorationManager.solidColorDecorationTypes;

  const decorationRangesList: vscode.Range[][] = Array.from(
    { length: solidColorDecorationTypes.length },
    () => [],
  );
  // each token
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    const pearsonHashValue = pearsonHash(text);
    const scaledHashValue = scaleHash(
      pearsonHashValue,
      solidColorDecorationTypes.length - 1,
    );

    // Process subText decoration
    let subTextStartCounter = token.start;
    const subTextArr = splitString(text);
    for (let j = 0; j < subTextArr.length; j++) {
      const subText = subTextArr[j];
      const subTextLength = subText.length;
      if (subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      const range = new vscode.Range(
        token.line,
        subTextStartCounter,
        token.line,
        subTextStartCounter + 1,
      );
      if (j > 0) {
        decorationRangesList[scaledHashValue].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  return [solidColorDecorationTypes, decorationRangesList];
}

/**
 * 09. First character of sub text with solid color commonly
 */
export function decorate_firstCharacter_solidColor_commonly(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const solidColorDecorationType =
    decorationManager.solidColorDecorationTypes[0];

  const decorationRanges: vscode.Range[] = [];
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;
    let subTextStartCounter = token.start;

    // Process subText decoration
    const subTextArr = splitString(text);
    for (let j = 0; j < subTextArr.length; j++) {
      const subText = subTextArr[j];
      const subTextLength = subText.length;
      if (subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      const range = new vscode.Range(
        token.line,
        subTextStartCounter,
        token.line,
        subTextStartCounter + 1,
      );
      subTextStartCounter = subTextStartCounter + subTextLength;
      if (j > 0) {
        decorationRanges.push(range);
      }
    }
  }

  return [[solidColorDecorationType], [decorationRanges]];
}

/**
 * 11. Whole text with emoji prefix
 */
export function decorate_text_emoji(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const decorationTypes = decorationManager.emojiDecorationTypes;

  const decorationRangesList: vscode.Range[][] = Array.from(
    { length: decorationTypes.length },
    () => [],
  );
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;

    // Process prefix emoji decoration // TODO (WJ): move into single function
    const pearsonHashValue = pearsonHash(text);
    const scaledHashValue = scaleHash(
      pearsonHashValue,
      decorationTypes.length - 1,
    );
    const textRange = new vscode.Range(
      token.line,
      token.start,
      token.line,
      token.start + 1,
    );
    decorationRangesList[scaledHashValue].push(textRange);
  }

  return [decorationTypes, decorationRangesList];
}

/**
 * 10. Whole sub text with solid color by hash for unique sub text
 */
export function decorate_subText_solidColor_uniqueSubText(
  codeTokens: SemanticCodeToken[],
): [vscode.TextEditorDecorationType[], vscode.Range[][]] {
  const decorationManager = DecorationManager.getInstance();
  const solidColorDecorationTypes = decorationManager.solidColorDecorationTypes;

  const decorationRange2dArray: vscode.Range[][] = Array.from(
    { length: solidColorDecorationTypes.length },
    () => [],
  );
  // each token
  for (let i = 0; i < codeTokens.length; i++) {
    const token = codeTokens[i];
    const text = token.text;

    // each subText
    let subTextStartCounter = token.start;
    const subTextArr = splitString(text);
    for (let indexTwo = 0; indexTwo < subTextArr.length; indexTwo++) {
      const subText = subTextArr[indexTwo];
      const subTextLength = subText.length;
      if (subText.charAt(0) === "_") {
        // TODO (WJ): update to using regex & cover "-"
        subTextStartCounter = subTextStartCounter + subTextLength;
        continue;
      }

      const pearsonHashValue = pearsonHash(subText);
      const scaledHashValue = scaleHash(
        pearsonHashValue,
        solidColorDecorationTypes.length - 1,
      );
      const range = new vscode.Range(
        token.line,
        subTextStartCounter,
        token.line,
        subTextStartCounter + subTextLength,
      );
      if (indexTwo > 0) {
        // TODO (WJ): add config check to ignore first subText
        decorationRange2dArray[scaledHashValue].push(range);
      }
      subTextStartCounter = subTextStartCounter + subTextLength;
    }
  }

  return [solidColorDecorationTypes, decorationRange2dArray];
}
