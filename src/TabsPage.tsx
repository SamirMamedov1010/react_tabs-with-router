import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';

const TabsPage: React.FC = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabId={tabId}
      />
    </>
  );
};

export default TabsPage;
