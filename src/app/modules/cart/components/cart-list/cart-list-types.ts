import type { HTMLAttributes, ReactNode } from 'react'

export type CartListRootProps = HTMLAttributes<HTMLDivElement>
export type CartListHeaderProps = HTMLAttributes<HTMLDivElement>

export interface CartListHeaderCellProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export type CartListItemsProps = HTMLAttributes<HTMLDivElement>
export type CartListSeparatorProps = HTMLAttributes<HTMLDivElement>
export type CartListFooterProps = HTMLAttributes<HTMLDivElement>
export type CartListFooterContentProps = HTMLAttributes<HTMLDivElement>
export type CartListFooterActionsProps = HTMLAttributes<HTMLDivElement>
