import { Output, render } from "@alloy-js/core";
import * as ts from "@alloy-js/typescript";
const output = render(
  <Output>
    <ts.SourceFile path="test1.ts">
      <ts.FunctionDeclaration export default name="test1">
        console.log("foo");
      </ts.FunctionDeclaration>
      <ts.FunctionDeclaration export name="test2" />
    </ts.SourceFile>

    <ts.SourceFile path="test2.ts">
      <ts.FunctionDeclaration export default name="test1" refkey="test3" />
      <ts.FunctionDeclaration export name="test2" refkey="test4" />
    </ts.SourceFile>

    <ts.SourceFile path="test3.ts">
      const v1 = <ts.Reference refkey="test1" />;
      const v2 = <ts.Reference refkey="test2" />;
      const v3 = <ts.Reference refkey="test3" />;
      const v4 = <ts.Reference refkey="test4" />;
    </ts.SourceFile>
  </Output>
);

console.log(output);