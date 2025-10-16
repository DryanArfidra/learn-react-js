import React from 'react';
import useForm from '../hooks/useForm';

function SimpleForm() {
  const [formValues, handleInputChange] = useForm({ nama: '', email: '' });

  return (
    <div>
      <form>
        <div>
          <label>Nama: </label>
          <input type="text" name="nama" value={formValues.nama} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formValues.email} onChange={handleInputChange} />
        </div>
      </form>
      <h4>Data Input Real-time:</h4>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  );
}

export default SimpleForm;