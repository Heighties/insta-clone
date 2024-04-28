import { Box, VStack, Image, Input } from "@chakra-ui/react";

export const AuthForm = () => {
  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
        <Input placeholder="Email" fontSize={14} type="email" />
        <Input placeholder="Password" fontSize={14} type="password" />
      </VStack>
    </Box>
  );
};
