import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const TextContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInputStyle = styled.input<{ $error: boolean }>`
  flex: 1;
  border: 1px solid;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 12px;
  outline: none;
  border-color: ${(props) => (props.$error ? "red" : "#ddd")};
`;

const ErrorMessageStyle = styled.p`
  padding: 3px 16px 0px;
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
    <TextContainerStyle className={props.className}>
      <TextInputStyle
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $error={errorMessage !== ""}
        {...props}
        className=""
      />
      <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>
    </TextContainerStyle>
  );
}

export const ButtonStyle = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 16px;
  outline: none;
  background-color: #5886c7;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #345b88;
  }
  &:disabled {
    background-color: #ddd;
    color: #aaa;
    cursor: not-allowed;
  }
`;
