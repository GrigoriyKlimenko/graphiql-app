import { useLazyQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { parse, print } from 'graphql';
import React, { useEffect, useRef, useState } from 'react';

const GET_LOCATIONS = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

const useIde = () => {
  const [currentQuery, setCurrentQuery] = useState<DocumentNode>(GET_LOCATIONS);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [currentOutput, setCurrentOutput] = useState<string>('');

  const [getResponse, { error, data }] = useLazyQuery(currentQuery as DocumentNode);

  useEffect(() => {
    if (!error) {
      const dataString = JSON.stringify(data, null, 2);
      setCurrentOutput(dataString);
    } else {
      console.log(error);

      const errorMsg = `${JSON.stringify(
        error.message,
        null,
        2
      )}\nCheck the correctness of the request body.`;
      setCurrentOutput(errorMsg);
    }
  }, [data, error]);
  const handleQuery = async () => {
    if (!currentInput) {
      setCurrentOutput('Provide a request.');
      return;
    }
    try {
      const get = gql`
        ${currentInput}
      `;
      setCurrentQuery(get);
      getResponse();
    } catch (err) {
      const errorStrMsg = `${(err as Error).message}\nProvide a valid request.`;
      setCurrentOutput(errorStrMsg);
    }
  };
  const handleChange = (e: React.SyntheticEvent) => {
    setCurrentInput((e.target as HTMLTextAreaElement).value);
  };
  const prettifyInput = (value: string) => {
    const output = print(parse(value));
    setCurrentInput(output);
  };

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const handleInput = (str: string) => {
    prettifyInput(str);
    const cursorIndex = str.indexOf('__cArEt') + 7;
    setCurrentInput((str) => str.replace(/__cArEt/g, ''));
    const textarea = inputRef.current as HTMLTextAreaElement;
    textarea.focus();
    setTimeout(() => {
      textarea.setSelectionRange(cursorIndex, cursorIndex);
    });
  };

  return {
    inputRef,
    handleInput,
    handleChange,
    handleQuery,
    prettifyInput,
    currentInput,
    getResponse,
    currentOutput,
    setCurrentInput,
  };
};

export default useIde;
