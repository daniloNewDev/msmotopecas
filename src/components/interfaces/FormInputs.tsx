import React from "react";

interface TextInputProps {
  label: string;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, value, className, onChange, required = false, placeholder }) => (
  <>
    <h2>{label}</h2>
    <input
      type="text"
      className={className}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder} />
  </>
)

interface NumberInputProps extends Omit<TextInputProps, 'value'> {
  value: number;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({ label, value, className, onChange, required = false, placeholder }) => (
  <>
    <h2>{label}</h2>
    <input
      type="number"
      className={className}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  </>
)

interface DateInputProps {
  label: string;
  value: Date | null;
  className: string;
  onChange: (date: Date) => void;
  required?: boolean;
}

export const DateInput: React.FC<DateInputProps> = ({ label, value, className, onChange, required = false }) => (
  <>
    <h2>{label}</h2>
    <input
      type="date"
      className={className}
      value={value ? value.toISOString().split('T')[0] : ''}
      onChange={(e) => onChange(new Date(e.target.value))}
      required={required}
    />
  </>
)

interface SelectInputProps {
  label: string;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({ label, value, className, onChange, options, required = false }) => (
  <>
    <h2>{label}</h2>
    <select
      value={value}
      className={className}
      onChange={onChange}
      required={required}
    >
      <option value="">Selecione</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </>
);