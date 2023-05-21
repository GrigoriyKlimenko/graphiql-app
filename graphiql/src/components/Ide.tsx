import { ServerError, useLazyQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import React, { RefObject, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../pages/css/playground/index.css';
import { parse, print } from 'graphql';
import wand from '../assets/magic-wand.svg';
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
  const [currentQuery, setCurrentQuery] = useState<DocumentNode>(GET_LOCATIONS);

  const [state, setState] = useState<string>('');

  const [getDog, { error, data }] = useLazyQuery(currentQuery as DocumentNode);

  const handleQuery = (inputData: string) => {
    const inputVal = state;
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
      console.log(error);
    }
  };
  const handleChange = (e: React.SyntheticEvent) => {
    setState((e.target as HTMLTextAreaElement).value);
  };
  const prettifyInput = (value: string) => {
    const output = parse(value);
    setState(print(output));
  };
  return (
    <div className="ide">
      <div className="ide__controls">
        <Button onClick={() => handleQuery(state)} title="send request">
          GO!
        </Button>
        <Button onClick={() => prettifyInput(state)} title="prettify">
          <img src={wand} alt="prettify" />
        </Button>
      </div>
      <div className="ide__wrapper">
        <div className="ide__input-side">
          <Form.Control as="textarea" value={state} onChange={handleChange} />
        </div>
        <div className="ide__output-side">
          {error && (
            <code>
              <pre>{JSON.stringify((error.networkError as ServerError).result, null, 2)}</pre>
            </code>
          )}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
      </div>
    </div>
  );
};

export default Ide;
