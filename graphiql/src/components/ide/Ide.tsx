import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../pages/css/playground/index.css';
import wand from '../../assets/magic-wand.svg';
import useIde from '@/hooks/useIde';
import Documentation from './Documentation';
import { useTranslation } from 'react-i18next';
import VariablesArea from './VariablesArea';

const Ide = () => {
  const {
    handleChange,
    handleVarChange,
    handleQuery,
    inputRef,
    handleInput,
    prettifyInput,
    currentInput,
    currentVarInput,
    currentOutput,
    isVariablesOpen,
    setIsVariablesOpen,
  } = useIde();
  const { t } = useTranslation();

  return (
    <div className="ide">
      <div className="ide__wrapper">
        <Documentation handleInput={handleInput} />
        <div className="d-flex w-100 flex-column">
          <div className="ide__controls">
            <Button onClick={handleQuery} title="send request">
              {t('GO!')}
            </Button>
            <Button onClick={() => prettifyInput(currentInput)} title="prettify">
              <img src={wand} alt="prettify" />
            </Button>
          </div>
          <div className="w-100 d-flex gap-2 h-100">
            <div className="ide__input-side">
              <Form.Control
                as="textarea"
                ref={inputRef}
                value={currentInput}
                onChange={handleChange}
                placeholder={t('input request here...') as string}
              />
              <VariablesArea
                value={currentVarInput}
                onChange={handleVarChange}
                placeholder={t('input variables here...') as string}
                isOpen={isVariablesOpen}
                openHandler={() => setIsVariablesOpen(!isVariablesOpen)}
              />
            </div>
            <div className="ide__output-side">
              <pre>{currentOutput}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ide;
