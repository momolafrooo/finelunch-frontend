import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import Select, { SingleValue } from "react-select";
import styled from "styled-components";

interface Props {
  label: string;
  placeholder: string;
  name: string;
  options: Option[];
  control?: any;
}

interface Option {
  value: string;
  label: string;
}

const CustomSelect = (props: Props) => {
  const { label, placeholder, options, name, control } = props;

  return (
    <FormControl mb={3}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange }, formState: { errors } }) => (
          <>
            <StyledSelect
              name={name}
              onChange={(selectedItem: any) => {
                onChange(selectedItem?.value);
              }}
              placeholder={placeholder}
              className="basic-single"
              classNamePrefix="select"
              isLoading={false}
              isClearable
              isSearchable
              options={options}
            />
            {errors && errors[name] && <Box color="red.500">{errors[name]?.message as string}</Box>}
          </>
        )}
      />
    </FormControl>
  );
};

const StyledSelect = styled(Select)`
  .select__control {
    border-radius: 0.375rem !important;
    border-color: var(--chakra-colors-chakra-border-color);
  }

  .select__control--is-focused {
    z-index: 1 !important;
    border-color: #3182ce !important;
    box-shadow: 0 0 0 1px #3182ce !important;
  }
`;

export default CustomSelect;
