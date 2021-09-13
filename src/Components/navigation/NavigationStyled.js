import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 48px;
  margin-bottom: 12px;
  border-bottom: 1px solid #c1c1c1;
  .link {
    font-size: 20px;
    color: gray;
  }
  .link:not(:last-child) {
    margin-right: 24px;
  }
  .activeLink {
    color: black;
  }
`;
