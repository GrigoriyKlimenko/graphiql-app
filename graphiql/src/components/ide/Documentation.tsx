import data from '@/database/database';
import React, { FC, PropsWithChildren } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface DocumentationProps {
  handleInput: (query: string, variables: string) => void;
}

interface docObject {
  name: string;
  body: string;
  variables?: string;
}

const Documentation: FC<PropsWithChildren<DocumentationProps>> = ({ handleInput }) => {
  const { t } = useTranslation();
  return (
    <div className="ide__documentation__wrapper">
      <h2 className="d-block">{t('Documentation')}</h2>

      <div className="ide__documentation w-100">
        {data.map((obj: docObject, idx) => {
          return (
            <Button
              variant="outline-primary"
              key={idx}
              onClick={() => handleInput(obj.body, obj?.variables || '')}
              className="d-block w-100"
            >
              {t(obj.name)}
            </Button>
          );
        })}
        <div>
          {`${t('Reference')}: `}
          <Link to={'https://studio.apollographql.com/public/star-wars-swapi/home?variant=current'}>
            star-wars-swapi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
