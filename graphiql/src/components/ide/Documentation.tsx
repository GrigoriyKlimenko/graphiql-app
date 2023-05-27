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
    <div className="ide__documentation__wrapper">
      <h2 className="d-block">Documentation</h2>

      <div className="ide__documentation w-100">
        {data.map((obj: docObject, idx) => {
          return (
            <Button
              variant="outline-primary"
              key={idx}
              onClick={() => handleInput(obj.body, obj?.variables || '')}
              className="d-block w-100"
            >
              {obj.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Documentation;
