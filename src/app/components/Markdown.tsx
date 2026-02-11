import React from 'react';
import { marked } from 'marked';

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  const html = marked.parse(content, { breaks: true, gfm: true });
  return (
    <div
      className="prose prose-lumi max-w-none text-black prose-p:text-black prose-li:text-black"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
