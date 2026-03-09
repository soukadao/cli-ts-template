import { program } from "commander";
import pkg from "../package.json" with { type: "json" };
import { sum } from "./commands/sum/index.js";

program.name(pkg.name).description(pkg.description).version(pkg.version);

program
  .command("<sum>")
  .description("sum two numbers")
  .argument("<a>", "first number", Number)
  .argument("<b>", "second number", Number)
  .action((a: number, b: number) => {
    console.log(sum(a, b));
  });

program.parse();
