import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  placeholder: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  control?: any;
}

const CustomInput = (props: Props) => {
  const { label, placeholder, type, name, control } = props;

  return (
    <FormControl mb={3}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field, formState: { errors } }) => (
          <>
            <Input placeholder={placeholder} type={type} {...field} isInvalid={!!(errors && errors[name])} />
            {errors && errors[name] && <Box color="red.500">{errors[name]?.message as string}</Box>}
          </>
        )}
      />
    </FormControl>
  );
};

export default CustomInput;
