import React from 'react';
import {
  ThemeProvider,
  CSSReset,
  Image,
  Box,
  Flex,
  Link,
  Icon,
  Text
} from '@chakra-ui/core';
import Head from 'next/head';

const Index = () => {
  return (
    <ThemeProvider>
      <Head>
        <title>Creating.Social Project by .Plants</title>
      </Head>
      <CSSReset />
      <Flex align="center" justify="center">
        <Box textAlign="center">
          <Box my="20px">
            <Box textAlign="center">
              <Image
                display="inline"
                size="150px"
                alt="Creating.Social"
                src="/static/creating-social.svg"
              />
            </Box>

            <Text fontSize="3xl" mb="10px">
              Creating.Social Project
            </Text>

            <hr />
          </Box>

          <Box my="20px">
            <b>Work in Progress</b>
          </Box>

          <Box my="20px">
            <hr />

            <Box my="10px">
              <Link
                color="teal.500"
                href="https://status.creating.social"
                isExternal
              >
                System Status
                <Icon name="external-link" mx="2px" />
              </Link>
            </Box>

            <Text my="10px">Powered by</Text>
            <Link href="https://dotplants.net/">
              <Image
                display="inline"
                h="50px"
                alt=".Plants"
                src="/static/dotplants.svg"
              />
            </Link>
          </Box>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

export default Index;
