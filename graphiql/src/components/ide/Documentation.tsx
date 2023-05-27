import data from '@/database/database';
import React, { FC, PropsWithChildren } from 'react';
import { Button } from 'react-bootstrap';

interface DocumentationProps {
  handleInput: (query: string, variables: string) => void;
}

interface docObject {
  name: string;
  body: string;
  variables?: string;
}

const Documentation: FC<PropsWithChildren<DocumentationProps>> = ({ handleInput }) => {
  return (
    <div>
      <h2>Documentation</h2>
      {data.map((obj: docObject, idx) => {
        return (
          <Button key={idx} onClick={() => handleInput(obj.body, obj?.variables || '')}>
            {obj.name}
          </Button>
        );
      })}
    </div>
  );
};

export default Documentation;
