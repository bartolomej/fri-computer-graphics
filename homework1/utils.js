export function assert(actual, expected, message) {
  const testOutput = document.getElementById("testOut");
  let out = "";
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    out += `✅ Passed: ${message}\n`;
  } else {
    out += `❌ Failed: ${message}\n`
    out += `→ Expected: ${JSON.stringify(expected, null, 4)}\n`;
    out += `→ Actual: ${JSON.stringify(actual, null, 4)}\n`;
  }
  testOutput.innerText += out;
}
