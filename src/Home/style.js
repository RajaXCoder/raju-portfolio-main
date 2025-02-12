import styled from "styled-components";

const Skill = styled.span`
  position: relative;
  display: block;
  height: 100%;
  border-radius: 6px;
  background: cyan;
  animation: progress 0.4s ease-in-out forwards;
  opacity: 0;
  width: ${(props) => props.width};
  animation-delay: 0.1s;
`;
export default Skill;
