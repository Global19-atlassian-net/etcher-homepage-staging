import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Container, Heading, Flex, Text, Image, Box, Button, Link } from 'resin-components';
import check from '../images/green-check.svg'
import etcherPro from '../images/etcherPro/img.jpg'
import etcherProLogo from '../images/balena-etcher-pro.svg'

export const Card = styled(Box)`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const EtcherProComponent = styled(Flex)`
  background-image: url(${etcherPro});
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto;
  margin-top: 41px;
`

export default withTheme(props => {
  return (
    <EtcherProComponent>
      <Container>
        <Flex direction='row' alignItems='baseline'>
          <Flex width={1 / 2}>
            <Box width={5 / 6} direction='column' mt='327px' mb={303} pt={57} align='left'>
              <Heading.h1 fontSize={[20, 25, 30, 34]} mb={40}>The Etcher you love, with the perfect hardware</Heading.h1>
              <Text>
                Etcher Pro is a stand-alone hardware device that allows you to write to multiple cards or usb disks at once, at extreme speeds.
              </Text>
              <Flex direction='row' mt={40}>
                <Flex direction='row' alignItems='baseline'>
                  <Image src={check} />
                  <Heading.h6 
                    mx={15}>
                    Multi-Write
                  </Heading.h6>
                </Flex>
                <Flex direction='row'>
                  <Image src={check} />
                  <Heading.h6 mx={15}>Insane Speeds</Heading.h6>
                </Flex>
                <Flex direction='row'>
                  <Image src={check} />
                  <Heading.h6 mx={15}>Modular Expansion</Heading.h6>
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <Flex width={1 / 2} direction='column'>
            <Box style={{ 
              fontSize: '14px',
              width: '120px', 
              height: '29px', 
              borderTopLeftRadius: '14px', 
              borderTopRightRadius: '14px', 
              backgroundColor: '#2a506f',
              marginTop: '327px',
              color: '#c8f178',
              textAlign: 'center',
              marginLeft: '25px',
              padding: '6px'}}>
              Coming soon
            </Box>
            <Box width={2 / 3}>
              <Card style={{ width: '384px', height: '329px', marginRight: '326px' }} p={50} align='center'>
                <Text align='center' mt={9} mb={30} size='11px' color='#00aeef'>HARDWARE</Text>
                <Image src={etcherProLogo} />
                <Text mt={30} align='center' size='14px'>Etcher Pro is the next stage in Etcher’s journey, and an expansion of Etcher’s vision and focus.</Text>
                <Button mt={30} primary style={{ borderRadius: '20px' }}><Link style={{color: '#fff', fontSize: '14px'}} href='/etcher/pro'>Learn more</Link></Button>
              </Card>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </EtcherProComponent>
  );
});
