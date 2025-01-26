// LoanDetails.jsx

import React, { useState } from 'react';

const LoanDetails = () => {
  // Sample state to hold loan details (this will be populated dynamically later)
  const [loanDetails, setLoanDetails] = useState({
    category: '',
    subcategory: '',
    loanAsked: '',
    timePeriod: '',
  });

  // Function to handle the "Proceed" button click
  const handleProceed = () => {
    // Logic to proceed with the loan (for now, just log the details)
    console.log('Proceeding with loan details:', loanDetails);
    // Here you can redirect or handle further actions like API calls
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Loan Details</h2>

      {/* Table to display loan details */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Loan Category</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Subcategory</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Loan Asked</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Loan Time Period</th>
          </tr>
        </thead>
        <tbody>
          {/* Display loan details from the state */}
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{loanDetails.category}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{loanDetails.subcategory}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{loanDetails.loanAsked}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{loanDetails.timePeriod}</td>
          </tr>
        </tbody>
      </table>

      {/* Proceed Button */}
      <button
        onClick={handleProceed}
        style={{
          marginTop: '20px',
          padding: '12px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Proceed
      </button>
    </div>
  );
};

export default LoanDetails;
