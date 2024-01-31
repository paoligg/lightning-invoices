import React, { useState } from 'react';
import axios from 'axios';
import './InvoiceForm.css'; 

interface InvoiceFormProps {
  onInvoiceCreated: () => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onInvoiceCreated }) => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  const handleCreateInvoice = async () => {
    // ... existing code ...
  };

  return (
    <div className="invoice-form">
      <h2>Create Invoice</h2>
      <div>
        <label>
          Amount:
          <input type="text" onChange={(e) => setAmount(Number(e.target.value) * 10 ** 18)} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
      <button onClick={handleCreateInvoice}>Create Invoice</button>
    </div>
  );
};

export default InvoiceForm;
