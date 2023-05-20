import React, { RefObject, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql, DocumentNode, useLazyQuery } from '@apollo/client';
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

export default function Playground() {
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
  console.log(data);

  return (
    <div>
      <div>Playground</div>
      <Form.Control as="textarea" ref={inputRef} />
      <Button onClick={() => handleQuery(inputRef.current?.value as string)}>Query!</Button>
      <hr />
      {queryError && JSON.stringify(queryError.message)}
      {data && !queryError && JSON.stringify(data?.locations, null, 2)}
      <hr />
      <br />
      <Link to="/dashboard">Profile</Link>
    </div>
  );
}
