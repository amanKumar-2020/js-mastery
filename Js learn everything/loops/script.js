// You’re given a nested object, and you need to print all keys with their full “path”.
// Use recursion + for...in together.

const user = {
  name: "Alex",
  contact: {
    email: "alex@mail.com",
    phone: {
      home: "111-222",
      work: "333-444",
    },
  },
};

function printObject(obj, prefix = "") {
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    console.log(newKey);
    console.log(value);
    

    if (typeof value === "object" && value !== null) {
      printObject(value, newKey);
    } else {
      console.log(`${newKey}: ${value}`);
    }
  }
}
printObject(user);
