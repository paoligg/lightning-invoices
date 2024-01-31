import React, { useState } from 'react';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import './App.css'; 

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleInvoiceCreated = () => {
    setShowForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lightning Invoice Generator</h1>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'Create Invoice'}
        </button>
        {showForm && <InvoiceForm onInvoiceCreated={handleInvoiceCreated} />}
        <InvoiceList />
      </header>
    </div>
  );
};

export default App;
