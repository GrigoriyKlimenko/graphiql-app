import data from '@/database/database';
import React, { FC, PropsWithChildren } from 'react';
import { Button } from 'react-bootstrap';

interface DocumentationProps {
  handleInput: (str: string) => void;
}

const Documentation: FC<PropsWithChildren<DocumentationProps>> = ({ handleInput }) => {
  return (
    <div>
      <h2>Documentation</h2>
      {data.map((obj, idx) => {
        return (
          <Button key={idx} onClick={() => handleInput(obj.body)}>
            {obj.name}
          </Button>
        );
      })}
    </div>
  );
};

export default Documentation;
