import styled from 'styled-components';

const SocialLink = styled.a`
  border: 1px solid #bfc8d2;
  border-radius: 15px;
  color: #FFFFFF;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    stroke: #3498db;
    vertical-align: middle;
    width: 20px;
  }

  &:hover {
    border-color: #3e465b;
  }
`;

export default SocialLink;