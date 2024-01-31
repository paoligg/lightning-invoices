import React, { useState, useEffect } from 'react';
import axios from 'axios';
import macaroonFile from './path-to-macaroon/admin.macaroon'; 

interface Invoice {
  payment_hash: string;
  value: string;
  memo: string;
  status: string;
}

const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const getInvoices = async () => {
      const restHost = 'localhost:8080';

      try {
        const response = await axios.get(`https://${restHost}/v1/invoices`, {
          headers: {
            'Grpc-Metadata-macaroon': (await fetch(macaroonFile)).text(),
          },
        });

        const fetchedInvoices: Invoice[] = response.data.invoices;
        setInvoices(fetchedInvoices);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    getInvoices();
  }, []);

  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.payment_hash}>
            <strong>Amount:</strong> {invoice.value}, <strong>Memo:</strong> {invoice.memo}, <strong>Status:</strong> {invoice.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
