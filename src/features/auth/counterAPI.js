export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    //if async not used here await caused error
    const response = await fetch("htttp://localhost8080");
    const data = await response.json(); //convert response into json
    resolve({ data });
  });
}
