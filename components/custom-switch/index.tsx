import { Box, FormControl, FormLabel, Input, Switch } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control?: any;
}

const CustomSwitch = (props: Props) => {
  const { label, name, control } = props;

  return (
    <FormControl mb={3} display="flex" alignItems="flex-start">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Switch
            size="md"
            id={name}
            mt={0.5}
            onChange={(e) => field.onChange(e.target.checked)}
            isChecked={field.value}
          />
        )}
      />
    </FormControl>
  );
};

export default CustomSwitch;
