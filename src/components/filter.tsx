import { ReactNode, type ComponentProps } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select';

type FilterProps = ComponentProps<typeof Select> & {
  icon?: ReactNode;
  label: string;
  filterKey: string;
  options: Array<{
    label: string;
    value: string;
  }>;
};

export const Filter = ({
  icon,
  label,
  filterKey,
  options,
  ...rest
}: FilterProps) => {
  const [, setSearchParams] = useSearchParams();

  const handleFilterChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set(filterKey, value);
      // reset page when filter changes
      prev.set('page', '1');
      return prev;
    });
  };

  return (
    <Select
      {...rest}
      onValueChange={(value) => {
        handleFilterChange(value);
      }}
    >
      <SelectTrigger className='w-full md:w-max space-x-2'>
        {icon}
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ label, value }, index) => (
          <SelectItem
            key={index}
            value={value}
            className='capitalize'
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
