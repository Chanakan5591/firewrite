import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import { defaultSchema } from 'hast-util-sanitize'

import './preview.css'
import 'github-markdown-css/github-markdown.css'
import 'prism-material-themes/themes/material-default.css'

import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeReact from 'rehype-react'
import rehypeSanitize from 'rehype-sanitize'
import 'highlight.js/styles/atom-one-dark.css'
import rehypeHighlight from 'rehype-highlight'
import emoji from 'remark-emoji'

interface Props {
  doc: string
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

const Preview: React.FC<Props> = (props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(emoji)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, schema)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeReact, {
      createElement: React.createElement
    })
    .processSync(props.doc).result //props.doc

  return <div className='preview markdown-body'>{md}</div>
}

export default Preview
