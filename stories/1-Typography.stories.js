import React from 'react';
import { Heading, CTA, Link, Text } from '../src/typography';
import { Box, Flex } from '../src/box';

export default {
  title: 'Typography',
};

export const HeadingStory = () => (
  <>
    <Heading type="extraLarge">Extra Large Heading</Heading>
    <Heading type="large">Large Heading</Heading>
    <Heading type="medium">Medium Heading</Heading>
    <Heading type="small">Small Heading</Heading>
  </>
);

HeadingStory.story = {
  name: 'Heading',
  parameters: {
    'in-dsm': {
      component: Heading,
      componentPath: '../src/typography',
      id: '',
      versionFilePath: '../version-file.json',
    },
  },
};

export const CTAStory = () => (
  <>
    <Flex justifyContent="space-evenly" mb={4}>
      <CTA type="large" href="#">
        Large CTA →
      </CTA>
      <CTA type="large" href="#">
        Large CTA ↗
      </CTA>
    </Flex>
    <Flex justifyContent="space-evenly" mb={4}>
      <CTA type="small" href="#">
        Small CTA →
      </CTA>

      <CTA type="small" href="#">
        Small CTA ↗
      </CTA>
    </Flex>
  </>
);

CTAStory.story = {
  name: 'CTA',
  parameters: {
    'in-dsm': {
      component: CTA,
      componentPath: '../src/typography',
      id: '',
      versionFilePath: '../version-file.json',
    },
  },
};

export const LinkStory = () => (
  <>
    <Box mb={4}>
      <Text type="body">Body Copy</Text>
    </Box>
    <Box mb={4}>
      <Text type="editorial">Editorial Text</Text>
    </Box>
    <Box>
      <Text type="quote">“Quote Text”</Text>
    </Box>
  </>
);

LinkStory.story = {
  name: 'Link',
  parameters: {
    'in-dsm': {
      component: Link,
      componentPath: '../src/typography',
      id: '',
      versionFilePath: '../version-file.json',
    },
  },
};

export const ContentStory = () => (
  <>
    <Box mb={4}>
      <Link type="list" href="#">
        List Link
      </Link>
    </Box>
    <Box mb={4}>
      <Link type="breadcrumb" href="#">
        Breadcrumb
      </Link>
    </Box>
    <Flex alignItems="center">
      <Link type="captionLight" href="#">
        Caption Light
      </Link>

      <Box width={200} />

      <Link type="captionDark" href="#">
        Caption Dark
      </Link>
    </Flex>
  </>
);

ContentStory.story = {
  name: 'Text',
  parameters: {
    'in-dsm': {
      component: Text,
      componentPath: '../src/typography',
      id: '',
      versionFilePath: '../version-file.json',
    },
  },
};
