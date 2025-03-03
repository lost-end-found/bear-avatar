import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";
import { BsChevronDown } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";

const BuyShotButton = ({
  credits,
  onPaymentSuccess,
}: {
  credits: number;
  onPaymentSuccess: (credits: number, promptWizardCredits: number) => void;
}) => {
  const { push, query } = useRouter();
  const [waitingPayment, setWaitingPayment] = useState(false);

  const { isLoading } = useQuery(
    "check-shot-payment",
    () =>
      axios.get(`/api/checkout/check/${query.ppi}/${query.session_id}/shot`),
    {
      cacheTime: 0,
      refetchInterval: 4,
      retry: 0,
      enabled: waitingPayment,
      onSuccess: (response) => {
        const { credits, promptWizardCredits } = response.data;
        onPaymentSuccess(credits, promptWizardCredits);
      },
      onSettled: () => {
        setWaitingPayment(false);
      },
    }
  );

  useEffect(() => {
    setWaitingPayment(query.ppi === query.id);
  }, [query]);

  const handleShotPayment = (quantity: number) => {
    push(`/api/checkout/shots?quantity=${quantity}&ppi=${query.id}`);
  };

  return (
    <Menu>
      <MenuButton
        rightIcon={<BsChevronDown />}
        isLoading={isLoading}
        size="xs"
        shadow="none"
        variant="brand"
        as={Button}
      >
        <HStack spacing={0}>
          <IoIosFlash />
          {credits === 0 ? (
            <Text>Buy more shots</Text>
          ) : (
            <Text>
              {credits} Shot{credits > 1 && "s"} left
            </Text>
          )}
        </HStack>
      </MenuButton>
      <MenuList fontSize="sm">
        <MenuItem
          command="$4"
          onClick={() => {
            handleShotPayment(20);
          }}
        >
          <b>20 shots</b>
          <Text fontSize="xs">+20 prompt assists</Text>
        </MenuItem>
        <MenuItem
          command="$7"
          onClick={() => {
            handleShotPayment(50);
          }}
        >
          <b>50 shots</b>
          <Text fontSize="xs">+40 prompt assists</Text>
        </MenuItem>
        <MenuItem
          command="$10"
          onClick={() => {
            handleShotPayment(100);
          }}
        >
          <b>100 shots</b>
          <Text fontSize="xs">+60 prompt assists</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BuyShotButton;
