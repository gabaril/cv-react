import React, { HTMLAttributes } from "react";

export namespace Markup {

  export enum SupportedNodeTypes {
    Div = 'div',
    Span = 'span'
  }

  export type Props = {
    /**
     * Node generated in dom
     */
    nodeType: SupportedNodeTypes
    /**
     * Content injected inside the node
     */
    nodeContent: string
    /**
     * Attributes passed to the node
     */
    nodeAttributes?: HTMLAttributes<any>
  }

  export const Component = ({
    nodeType,
    nodeContent,
    nodeAttributes
  }: Props) => {
    return React.createElement(
        nodeType,
        {
          ...(nodeAttributes ?? {}),
          dangerouslySetInnerHTML: {
            __html: nodeContent
            .replace('<script>', '')
            .replace('</script>', '')
            .replace('javascript:', '')
          }
        }
    )
  }
}
