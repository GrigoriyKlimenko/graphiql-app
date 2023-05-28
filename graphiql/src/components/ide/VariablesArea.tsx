import React, { FC } from 'react';
import { Button, Form } from 'react-bootstrap';

interface VariablesAreaProps {
  value: string;
  onChange: (e: React.SyntheticEvent) => void;
  openHandler: () => void;
  placeholder: string;
  isOpen: boolean;
}

const VariablesArea: FC<VariablesAreaProps> = ({
  value,
  onChange,
  placeholder,
  isOpen,
  openHandler,
}) => {
  return (
    <>
      <Button variant="secondary" className="mb-0" onClick={openHandler}>
        Variables
      </Button>
      {isOpen && (
        <Form.Control as="textarea" value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </>
  );
};

export default VariablesArea;
