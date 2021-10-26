import styled from 'styled-components';
import { transition } from 'config/style-util';
import WithDirection from 'config/withDirection';

const WDSocialWidgetWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;

  li {
    line-height: 1;
    &:nth-child(n + 2) {
      margin-left: ${props => (props['data-rtl'] === 'rtl' ? '0' : '16px')};
      margin-right: ${props => (props['data-rtl'] === 'rtl' ? '15px' : '0')};
    }

    a {
      display: flex;
      line-height: 1;
      opacity: 0.8;
      font-size: 19px;
      ${transition()};

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const SocialWidgetWrapper = WithDirection(WDSocialWidgetWrapper);
export { SocialWidgetWrapper };