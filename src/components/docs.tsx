import SyntaxHighlighter from "react-syntax-highlighter";
import Container from "./container";
import Heading from "./heading";
import { Button } from "./ui/button";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function DOCS() {
  const code = `from vectorshift.node import *

from vectorshift.pipeline import *

file_node = InputNode(name='file_input', input_type='file')

model_text_node = TextNode(text='Describe this file to me.')

llm_node = OpenAI_LLMNode(`;
  return (
    <div className="border-b">
      <Container className="border-x px-4 md:px-8 py-8 md:py-16">
        <div className="bg-linear-to-br from-neutral-100/10 via-transparent to-neutral-100/5 md:h-64 rounded-lg border overflow-hidden flex flex-col md:flex-row gap-8 px-4 md:px-8 pt-4">
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col gap-1">
              <Heading variant="small">VectorShift Docs</Heading>
              <p className="md:max-w-xs lg:max-w-sm text-muted-foreground font-mono text-sm">
                Unlock advanced features and detailed guides in our extensive
                documentation.
              </p>
              <Button variant={"primary"} className="w-fit mt-4">
                Browse documentation
              </Button>
            </div>
          </div>

          <div className="border rounded-t-lg flex-1 p-2 pb-0 bg-white/20">
            <div className="border rounded-t-[8px] bg-neutral-950 h-full pt-8 relative">
                <p className="bg-primary rounded-full px-2 py-0.5 w-fit text-xs absolute top-4 left-4">pipeline_setup.py</p>
              <SyntaxHighlighter
                language="python"
                style={a11yDark}
                customStyle={{
                  background: "transparent",
                  margin: 0,
                  padding: 18,
                  fontSize: "14px",
                  lineHeight: 1.2,
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
