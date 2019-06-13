import React from 'react';
import styled from 'styled-components';
import Flex from 'mdx-deck/dist/Flex';
import Box from 'mdx-deck/dist/Box';

const Root = styled.div([], {
  width: '100vw',
  height: '100vh',
  padding: '10vmax'
});

const Half = styled(Box)`
  > * {
    max-width: 100%;
  }

  & ~ & {
    padding: 2em;
    text-align: left;
  }
`;

const Split = ({ children }) => {
  const kids = React.Children.toArray(children.props.children);
  const times = kids.length;
  const width = 1 / times;

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%'
        }}
      >
        {kids.map(k => (
          <Half key={k.key} width={width}>
            {k}
          </Half>
        ))}
      </Flex>
    </Root>
  );
};

export const Split2 = ({ children }) => {
  const kids = React.Children.toArray(children.props.children);

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%'
        }}
      >
        {kids.map(k => (
          <Half key={k.key}>{k}</Half>
        ))}
      </Flex>
    </Root>
  );
};

export default Split;
