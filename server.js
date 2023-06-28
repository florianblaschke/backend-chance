import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
/* const name = chance.name({ middle: true });
const age = chance.age({ teen: true });
const profession = chance.profession({ rank: true }); */

export const server = createServer((request, response) => {
  if (request.url) {
    const name = chance.name({ middle: true });
    const age = chance.age({ teen: true });
    const profession = chance.profession({ rank: true });
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  }
});
