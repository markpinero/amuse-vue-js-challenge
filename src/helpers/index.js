export const capitalize = (str) =>
  typeof str === "string" ? str.charAt(0).toUpperCase() + str.slice(1) : str;

export const mockApi = {
  get: () =>
    new Promise(async (resolve) => {
      const products = await import("../../products.json");

      resolve(products.default);
    }),
};

export function isLocalStorageSupported() {
  const test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
