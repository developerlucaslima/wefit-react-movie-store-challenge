import { forwardRef } from 'react'

import {
  Footer,
  FooterActions,
  FooterContent,
  Header,
  Root,
  Separator,
  Th,
} from './cart-list-styles'
import type {
  CartListFooterActionsProps,
  CartListFooterContentProps,
  CartListFooterProps,
  CartListHeaderCellProps,
  CartListHeaderProps,
  CartListRootProps,
  CartListSeparatorProps,
} from './cart-list-types'

export const CartListRoot = forwardRef<HTMLDivElement, CartListRootProps>(
  ({ children, ...rest }, ref) => (
    <Root ref={ref} {...rest}>
      {children}
    </Root>
  ),
)
CartListRoot.displayName = 'CartList.Root'

export const CartListHeader = ({ children, ...rest }: CartListHeaderProps) => (
  <Header {...rest}>{children}</Header>
)
CartListHeader.displayName = 'CartList.Header'

export const CartListHeaderCell = ({
  children,
  ...rest
}: CartListHeaderCellProps) => <Th {...rest}>{children}</Th>
CartListHeaderCell.displayName = 'CartList.HeaderCell'

export const CartListSeparator = ({ ...rest }: CartListSeparatorProps) => (
  <Separator {...rest} />
)
CartListSeparator.displayName = 'CartList.Separator'

export const CartListFooter = ({ children, ...rest }: CartListFooterProps) => (
  <Footer {...rest}>{children}</Footer>
)
CartListFooter.displayName = 'CartList.Footer'

export const CartListFooterContent = ({
  children,
  ...rest
}: CartListFooterContentProps) => (
  <FooterContent {...rest}>{children}</FooterContent>
)
CartListFooterContent.displayName = 'CartList.FooterContent'

export const CartListFooterActions = ({
  children,
  ...rest
}: CartListFooterActionsProps) => (
  <FooterActions {...rest}>{children}</FooterActions>
)
CartListFooterActions.displayName = 'CartList.FooterActions'
