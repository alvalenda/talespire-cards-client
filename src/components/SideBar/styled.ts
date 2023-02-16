import { NavLink, NavLinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  width: ${({ expanded }) => (expanded === 'true' ? '200px' : '50px')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  z-index: 1;
`
export const SidebarLink = styled(NavLink)<ExpandSidebarLinkProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  width: 90%;
  margin: 5px;
  padding: 10px 20px;
  text-justify: center;
  text-indent: 2rem;
  overflow: hidden;

  svg {
    position: absolute;
    top: 50%;
    left: 0.65rem;

    transform: translate(0, -50%);
  }

  &.active {
    color: ${({ theme }) => theme.colors.interactive};
    background-color: ${({ theme }) => theme.colors.background} !important;
  }
`
export const ExpandButton = styled.button<ExpandButtonProps>`
  position: absolute;
  bottom: 11.5rem;
  left: ${({ expanded }) => (expanded === 'true' ? '8.2rem' : '0.01rem')};
  border: ${({ expanded }) =>
    expanded === 'true' ? 'none' : '1px solid #333'};
  border-radius: 33%;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: var(--font-size-lg);
  width: 50px;
  height: 50px;

  transition: left 0.3s ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transition: transform 0.3s ease-in-out;

    transform: translate(-50%, -50%)
      ${({ expanded }) =>
        expanded === 'true' ? 'rotate(270deg)' : 'rotate(90deg)'};
  }

  ${({ expanded }) =>
    expanded !== 'true' &&
    css`
      right: 0;
    `}

  &:hover {
    cursor: pointer;
    color: var(--color-white);
    background: ${({ theme }) => theme.colors.interactive};
  }
`

export const SidebarLinkContainer = styled.div<SidebarContainerProps>`
  position: absolute;
  top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ expanded }) => (expanded === 'true' ? '200px' : '50px')};
  transition: width 0.3s ease-in-out;
`

export const UserMenuButton = styled.button<UserMenuButtonProps>`
  position: relative;
  background: none;
  border: none;
  outline: inherit;
  text-decoration: none;
  color: inherit;
  font: inherit;
  border-radius: 5px;
  font-weight: 600;
  width: ${({ expanded }) => (expanded === 'true' ? '95%' : '50px')};
  margin: 5px;
  padding: 10px 20px;
  text-indent: 2rem;
  text-align: left;
  overflow: hidden;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: 0.65rem;
    transform: translate(0, -50%);
  }

  &.active {
    color: ${({ theme }) => theme.colors.interactive};
    background-color: ${({ theme }) => theme.colors.background} !important;
  }
`

export const UserMenuContainer = styled.div<SidebarContainerProps>`
  position: absolute;
  top: calc(100% - 12rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  width: ${({ expanded }) => (expanded === 'true' ? '200px' : '50px')};
  z-index: 1;

  transition: width 0.3s ease-in-out;
`

interface ExpandButtonProps extends React.HTMLProps<HTMLButtonElement> {
  expanded: string
}

interface ExpandSidebarLinkProps extends React.HTMLProps<NavLinkProps> {
  expanded: string
}

interface SidebarContainerProps extends React.HTMLProps<HTMLDivElement> {
  expanded: string
}

interface UserMenuButtonProps extends React.HTMLProps<HTMLButtonElement> {
  expanded: string
}
