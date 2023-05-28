import React, { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <>
      <Button variant="secondary" className="mb-0" onClick={openHandler}>
        {t('Variables')}
      </Button>
      {isOpen && (
        <Form.Control as="textarea" value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </>
  );
};

export default VariablesArea;
