/* eslint-disable react/display-name */
import React, { memo } from "react";
import { Flex, Icon, Link, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  link: string;
}

export const NavItem = memo(({ icon, children, link, ...rest }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === link;
  return (
    <Link href={link} style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? "blue.500" : ""}
        color={isActive ? "white" : ""}
        _hover={{
          bg: "blue.500",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
});
