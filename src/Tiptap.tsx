import { useEditor, EditorContent, Extensions } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";

import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import { cn } from "./utils";

const EDITOR_EXTENSIONS: Extensions = [Document, Text, Paragraph, Image];

export const getBaseEditorOptions = (content: string) => ({
  extensions: EDITOR_EXTENSIONS,
  content,
  editorProps: {
    attributes: {
      class:
        "h-full prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc !outline-0",
    },
  },
});

const Tiptap = () => {
  const editorOptions = getBaseEditorOptions("");
  const baseClasses = editorOptions.editorProps?.attributes?.class || "";

  const editor = useEditor(
    {
      ...editorOptions,
      extensions: [...editorOptions.extensions],
      editorProps: {
        attributes: {
          class: cn("h-full min-h-full", baseClasses),
          style: "font-family: Arial; font-size: 14px;",
        },
      },
    },
    []
  );

  return (
    <div className="h-full flex flex-col">
      <EditorContent
        className="min-h-[140px] [&>div]:min-h-[140px] border border-solid border-color-[#e3e3e5] rounded p-4 overflow-x-auto"
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
