// Convert a string to an array of characters
export function convertStringToCharacterArray(input: string): string[] {
  const arrayOfChar = input.split("");
  return arrayOfChar;
}

// Remove all the duplicate characters from an array
export function deleteAllElementsFromTheArrayExceptGivenIndex(
  arr: string[],
  char: string,
  index: number
): string[] {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char && i !== index) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

// Check if a given array has unique characters
export function hasUniqueCharactersInAGivenArray(charArray: string[]): boolean {
  const uniqueSet: Set<string> = new Set(charArray);
  return uniqueSet.size === charArray.length;
}

// Create an occurrence map for a given array
export function createOccurrenceMap(arr: string[]): Map<any, any> {
  const occurrenceMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (occurrenceMap.has(element)) {
      occurrenceMap.set(element, occurrenceMap.get(element) + 1);
    } else {
      occurrenceMap.set(element, 1);
    }
  }

  return occurrenceMap;
}

// export function getHexColorCode(character: string): string {
//   const code = character.charCodeAt(0);

//   if (code >= 97 && code <= 122) {
//     const index = code - 97; // Get the index based on the ASCII code of 'a'
//     const hue = Math.round((index / 26) * 360); // Calculate the hue value

//     return `#${convertHueToHex(hue)}`;
//   }

//   return "#ffffff"; // Character is not from 'a' to 'z'
// }

// function convertHueToHex(hue: number): string {
//   const rgb = hslToRgb(hue, 100, 50);
//   const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
//   return hex;
// }

// function hslToRgb(h: number, s: number, l: number): number[] {
//   h /= 360;
//   s /= 100;
//   l /= 100;

//   let r, g, b;

//   if (s === 0) {
//     r = g = b = l; // achromatic
//   } else {
//     const hue2rgb = (p: number, q: number, t: number): number => {
//       if (t < 0) t += 1;
//       if (t > 1) t -= 1;
//       if (t < 1 / 6) return p + (q - p) * 6 * t;
//       if (t < 1 / 2) return q;
//       if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//       return p;
//     };

//     const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//     const p = 2 * l - q;

//     r = hue2rgb(p, q, h + 1 / 3);
//     g = hue2rgb(p, q, h);
//     b = hue2rgb(p, q, h - 1 / 3);
//   }

//   return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
// }

// function rgbToHex(r: number, g: number, b: number): string {
//   const componentToHex = (c: number): string => {
//     const hex = c.toString(16);
//     return hex.length === 1 ? "0" + hex : hex;
//   };

//   return componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
