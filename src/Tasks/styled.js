import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin-top: 15px;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  padding: 16px 20px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border-left: 4px solid #ebc189;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 16px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  display: block;
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
      color: #888;
      opacity: 0.95;
    `}
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  border: none;
  background-color: #f0d8bab4;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: #2c2c2c;

  &:hover {
    background-color: #e3c28d;
    transform: translateY(-1px);
  }
`;
