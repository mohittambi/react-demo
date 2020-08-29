import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const Form = () => {
  const [name, setName] = useState('Adrian');
  const [receiptId, setReceiptId] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);

  const createAndDownloadPdf = () => {
    axios.post('/create-pdf', { name, receiptId, price1, price2 })
      .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
      .then(((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'generatedDocument.pdf');
      }));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <input type="number" placeholder="Receipt ID" name="receiptId" onChange={e => setReceiptId(e.target.value)} value={receiptId} />
      <input type="number" placeholder="Price 1" name="price1" onChange={e => setPrice1(e.target.value)} value={price1} />
      <input type="number" placeholder="Price 2" name="price2" onChange={e => setPrice2(e.target.value)} value={price2} />
      <button onClick={createAndDownloadPdf}>Download PDF</button></div>
  );
}

export default Form;