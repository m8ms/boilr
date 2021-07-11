import styled from "styled-components";

const PageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  box-sizing: border-box;
  min-height: calc(100vh - 64px);
  margin: 32px;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
`;

export default PageContainer;
