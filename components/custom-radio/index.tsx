import { Box, Checkbox, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Switch } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control?: any;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

const CustomRadio = (props: Props) => {
  const { label, name, control, options } = props;

  return (
    <FormControl mb={3}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <RadioGroup {...field}>
            <Stack spacing={4} direction="row">
              {options?.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default CustomRadio;
