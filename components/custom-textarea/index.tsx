import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  placeholder: string;
  name: string;
  control?: any;
}

const CustomTextArea = (props: Props) => {
  const { label, placeholder, name, control } = props;

  return (
    <FormControl mb={3}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field, formState: { errors } }) => (
          <>
            <Textarea placeholder={placeholder} {...field} isInvalid={!!(errors && errors[name])} />
            {errors && errors[name] && <Box color="red.500">{errors[name]?.message as string}</Box>}
          </>
        )}
      />
    </FormControl>
  );
};

export default CustomTextArea;
