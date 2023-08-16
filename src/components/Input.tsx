import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export const TextInputStyle = styled.input<{ error: boolean }>`
  border: 1px solid;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  outline: none;
  border-color: ${(props) => (props.error ? "red" : "#ddd")};
`;

const ErrorMessageStyle = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;

interface TextInputInterface {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage: string;
}

export function TextInput({
  value,
  onChange,
  placeholder,
  errorMessage,
  ...props
}: TextInputInterface & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <TextInputStyle
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={errorMessage !== ""}
        {...props}
      />
      <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>
    </>
  );
}
