import React from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import Button from "./Button";

type FormField =
  | {
      type: "text" | "email" | "password" | "date";
      name: string;
      label?: string;
      placeholder?: string;
      value: string;
      onChange: (value: string) => void;
      disabled?: boolean;
    }
  | {
      type: "checkbox";
      name: string;
      label?: string;
      checked: boolean;
      onChange: (value: boolean) => void;
      disabled?: boolean;
    }
  | {
      type: "dropdown";
      name: string;
      label?: string;
      value: string;
      onChange: (value: string) => void;
      options: { label: string; value: string }[];
      disabled?: boolean;
    };

type FormProps = {
  fields: FormField[];
  onSubmit: () => void;
  submitLabel?: string;
  disabled?: boolean;
  className?: string;
};

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitLabel = "Submit",
  disabled = false,
  className = "",
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={`space-y-4 ${className}`}
    >
      {fields.map((field, idx) => {
        if (field.type === "checkbox") {
          return (
            <Checkbox
              key={idx}
              label={field.label}
              checked={field.checked}
              onChange={field.onChange}
              disabled={field.disabled}
            />
          );
        }

        if (field.type === "dropdown") {
          return (
            <Dropdown
              key={idx}
              label={field.label}
              value={field.value}
              onChange={field.onChange}
              options={field.options}
              disabled={field.disabled}
            />
          );
        }

        return (
          <Input
            key={idx}
            type={field.type}
            label={field.label}
            value={field.value}
            placeholder={field.placeholder}
            onChange={field.onChange}
            disabled={field.disabled}
          />
        );
      })}

      <Button type="submit" disabled={disabled}>
        {submitLabel}
      </Button>
    </form>
  );
};

export default Form;
