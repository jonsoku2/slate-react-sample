// Import React dependencies.
import React, { FC, useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

const App: FC = ({ children }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<any[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  // Render the Slate context.
  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable />
    </Slate>
  );
};
export default App;
