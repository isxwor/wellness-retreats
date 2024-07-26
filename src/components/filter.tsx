import { type ComponentProps } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '#/components/ui/select';

type FilterProps = ComponentProps<typeof Select> & {
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
};

export const Filter = ({ name, options, ...rest }: FilterProps) => {
  return (
    <Select {...rest}>
      <SelectTrigger>{name}</SelectTrigger>
      <SelectContent>
        {options.map(({ label, value }, index) => (
          <SelectItem
            key={index}
            value={value}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
