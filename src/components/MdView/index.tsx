/* eslint-disable react/no-children-prop */
import React, { useEffect, useState, FC, CSSProperties } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import type { Components } from 'react-markdown'

import { Prism } from 'react-syntax-highlighter'
// 设置高亮样式
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = {
  code({ node, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <>
        <Prism
          showLineNumbers={true}
          children={String(children).replace(/\n$/, '')}
          // @ts-ignore
          style={ghcolors}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      </>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
} as Components

const MdView: FC<{ content: string }> = (props) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={props.content}
        components={Code}
      />
    </div>
  )
}
export default MdView
