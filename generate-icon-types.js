const fs = require("fs");
const path = require("path");

// Path to your icons directory
const iconsDir = path.join(__dirname, "src", "assets");
const outputFile = path.join(__dirname, "src", "app", "icon-names.ts");

// Get the list of all SVG files in the directory
const iconFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith(".svg"))
  .map((file) => file.replace(".svg", "")); // Remove '.svg' extension

// Generate the TypeScript type or enum
const iconTypeContent = `
export type IconName = ${iconFiles.map((icon) => `'${icon}'`).join(" | ")};
`;

// Write the generated type to a TypeScript file
fs.writeFileSync(outputFile, iconTypeContent);

console.log(`Icon types generated: ${iconFiles.length} icons found.`);
