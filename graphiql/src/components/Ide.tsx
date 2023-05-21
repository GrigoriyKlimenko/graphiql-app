import { useLazyQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import React, { RefObject, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Ide = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [currentQuery, setCurrentQuery] = useState<DocumentNode>(GET_LOCATIONS);
  const [queryError, setQueryError] = useState<Error | null>(null);
  const [getDog, { loading, error, data }] = useLazyQuery(currentQuery as DocumentNode);

  const handleQuery = (inputData: string) => {
    setQueryError(null);
    const inputVal = (inputRef as RefObject<HTMLTextAreaElement>).current?.value;
    if (!inputVal) {
      console.log('Provide a query');
      return;
    }
    try {
      const get = gql`
        ${inputData}
      `;
      setCurrentQuery(get);
      getDog();
    } catch (error) {
      setQueryError(error as Error);
    }
  };
  return (
    <div className="ide">
      <Button onClick={() => handleQuery(inputRef.current?.value as string)}>Query!</Button>
      <div className="ide__wrapper">
        <div className="ide__input-side">
          <Form.Control as="textarea" ref={inputRef} />
        </div>
        <div className="ide__output-side">
          {queryError && JSON.stringify(queryError.message)}
          {data && !queryError && JSON.stringify(data?.locations, null, 2)}
        </div>
      </div>
    </div>
  );
};

export default Ide;
