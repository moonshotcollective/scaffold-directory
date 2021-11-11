/* eslint react/jsx-props-no-spreading: off */
import React from "react";
import { chakra, Code, Divider, Heading, Image, Link, UnorderedList, Text } from "@chakra-ui/react";

export const chakraMarkdownComponents = {
  a: ({ href, children }) => (
    <Link href={href} color="blue.500">
      {children}
    </Link>
  ),
  blockquote: ({ children }) => (
    <Text mb={4} pl={3} borderLeft="4px solid" borderColor="gray.200">
      {children}
    </Text>
  ),
  code: ({ children }) => (
    <Code borderRadius="md" px={2} py={1}>
      {children}
    </Code>
  ),
  h1: ({ children }) => (
    <Heading as="h1" size="xl" mt={6} mb={4} pb={2} borderBottom="1px solid" borderColor="gray.100">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" size="lg" mt={6} mb={4}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" size="md" mt={6} mb={4}>
      {children}
    </Heading>
  ),
  hr: () => <Divider my={6} borderBottomWidth="4px" />,
  img: props => <Image {...props} mb={4} />,
  pre: ({ children }) => (
    <chakra.pre display="block" borderRadius="md" mb={4} p={3} bg="gray.100" overflowX="auto">
      {children}
    </chakra.pre>
  ),
  p: ({ children }) => (
    <Text color="gray.700" mb={4}>
      {children}
    </Text>
  ),
  ul: ({ children }) => <UnorderedList mb={4}>{children}</UnorderedList>,
};