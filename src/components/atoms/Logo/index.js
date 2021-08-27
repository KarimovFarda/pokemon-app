import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoIcon from 'assets/img/logo.png';

const Logo = styled(Link)`
  margin : 0 auto;
  background-image: url(${logoIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 150px;
  height: 60px;
`;
// margin: 5px 15% 0;
export default Logo;
