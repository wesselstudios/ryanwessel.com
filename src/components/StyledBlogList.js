import styled from "styled-components";

const StyledBlogList = styled.div`
  margin-bottom: 0;

  li.post {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0;
  }
  div.post-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2.terminal-loop {
    font-size: 1rem;
  }
  h2.post-title,
  h3.post-date,
  div.post-summary h2 {
    margin-bottom: 1rem;
  }
  .bold {
    font-weight: 600;
  }
  h2.terminal-loop span.indent {
    padding-left: 2rem;
  }
`;

export default StyledBlogList;