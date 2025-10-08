import { useState } from "react";

function Control() {
    const [name, setName] = useState('')
    const [submittedName, setSubmittedName]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(name);
        alert("Form disubmit dengan nama: "+name);
    };

    return (
         <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h2>3. Control Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Data yang disubmit: <strong>{submittedName}</strong></p>}
    </div>
    )
}

export default Control;