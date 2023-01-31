import { Box, Checkbox, FormControl, FormLabel, Input, Switch } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control?: any;
}

const CustomCheckbox = (props: Props) => {
  const { label, name, control } = props;

  return (
    <FormControl mb={3}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Checkbox {...field} defaultChecked={field.value}>
            {label}
          </Checkbox>
        )}
      />
    </FormControl>
  );
};

export default CustomCheckbox;
