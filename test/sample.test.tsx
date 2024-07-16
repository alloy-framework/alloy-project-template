import { Output, render, SourceFile } from "@alloy-js/core";
import { expect, it } from "vitest";

it("works", () => {
  const output = render(
    <Output>
      <SourceFile path="test.md" filetype="markdown">
        it works!
      </SourceFile>
    </Output>
  );

  expect(output.contents[0].contents).toEqual("it works!");
});