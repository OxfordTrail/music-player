module.exports = {
    preset: "react-native",
    testEnvironment: "jsdom",
    setupFiles: ["./__tests__/setup.js"],
    testPathIgnorePatterns: [
        "/node_modules",
        "./__tests__/setup.js"
    ]
  };
