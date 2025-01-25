import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');

  // Use the useNavigate hook to navigate
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CNIC:', cnic);
    console.log('Password:', password);

    // Navigate to the loan details page after submission
    navigate('/loandetails');
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User Login</h2>
      
      <form onSubmit={handleSubmit}>
        {/* CNIC Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cnic" style={{ display: 'block', marginBottom: '5px' }}>CNIC</label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="Enter CNIC"
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
