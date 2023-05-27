import { useLazyQuery } from '@apollo/client';
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
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [currentVarInput, setCurrentVarInput] = useState<string>('');
  const [currentOutput, setCurrentOutput] = useState<string>('');

  const [getResponse, { error, data }] = useLazyQuery(GET_LOCATIONS);

  useEffect(() => {
    if (!error) {
      const dataString = JSON.stringify(data, null, 2);
      setCurrentOutput(dataString);
    } else {
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
      const variables = JSON.parse(currentVarInput);
      getResponse({ variables, query: get });
    } catch (err) {
      const errorStrMsg = `${(err as Error).message}\nProvide a valid request.`;
      setCurrentOutput(errorStrMsg);
    }
  };
  const handleChange = (e: React.SyntheticEvent) => {
    setCurrentInput((e.target as HTMLTextAreaElement).value);
  };
  const prettifyVariables = (input: string) => {
    try {
      const parsedInput = JSON.parse(input);
      return JSON.stringify(parsedInput, null, 2);
    } catch (error) {
      return input;
    }
  };

  const handleVarChange = (e: React.SyntheticEvent) => {
    const input = (e.target as HTMLTextAreaElement).value;
    const prettifiedInput = prettifyVariables(input);
    setCurrentVarInput(prettifiedInput);
  };
  const prettifyInput = (value: string) => {
    try {
      const output = print(parse(value));
      setCurrentInput(output);
    } catch (error) {
      return value;
    }
  };

  const handleInput = (query: string, variables: string) => {
    prettifyInput(query);
    const cursorIndex = query.indexOf('__cArEt') + 7;
    setCurrentInput((str) => str.replace(/__cArEt/g, ''));
    if (variables) {
      const prettifiedVariables = prettifyVariables(variables);
      setCurrentVarInput(prettifiedVariables);
    }
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
    handleVarChange,
    handleQuery,
    prettifyInput,
    currentInput,
    currentVarInput,
    getResponse,
    currentOutput,
    setCurrentInput,
  };
};

export default useIde;
