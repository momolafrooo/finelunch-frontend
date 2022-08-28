/* eslint-disable react/display-name */
import React, { memo } from "react";
import { Box, CloseButton, Flex, useColorModeValue, Text, BoxProps } from "@chakra-ui/react";
import { NavItem } from "../nav-item";
import { LinkItems } from "./menu";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = memo(({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="Nunito" fontWeight="bold">
          Finelunch
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((menu) => (
        <NavItem key={menu.name} icon={menu.icon} link={menu.link}>
          {menu.name}
        </NavItem>
      ))}
    </Box>
  );
});
