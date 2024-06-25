import { CalendarIcon } from 'lucide-react';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar } from './calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

export type DatePickerProps = {
  value?: Date;
  onChange: (value: Date | undefined) => void;
  classname?: string;
};

export const DatePicker = ({ onChange, value, classname }: DatePickerProps) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant='outline'
        className={cn(
          'w-[240px] pl-3 text-left font-normal',
          !value && 'text-muted-foreground',
          classname
        )}
      >
        {value ? format(value, 'PPP') : 'Выберите дату'}
        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
      </Button>
    </PopoverTrigger>
    <PopoverContent className='w-auto p-0' align='start'>
      <Calendar
        mode='single'
        selected={value}
        onSelect={onChange}
        disabled={(date) => date < new Date('1900-01-01')}
        initialFocus
      />
    </PopoverContent>
  </Popover>
);
