import { Extensions } from "@tiptap/core";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";

import Image from "@tiptap/extension-image";

const EDITOR_EXTENSIONS: Extensions = [Document, Text, Image];

export const getBaseEditorOptions = () => ({
  extensions: EDITOR_EXTENSIONS,
  editorProps: {
    attributes: {
      class:
        "h-full prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc !outline-0",
    },
  },
});
