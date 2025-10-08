import { useRef, useState } from "react";

function Uncontrol() {
    const inputRef = useRef(null);
    const [submittedValue, setSubmittedValue] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        setSubmittedValue(value);
        alert("Form disubmit dengan nama "+value);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px'}}>
            <h2>uncontrol component</h2>
            <form onSubmit={handlesubmit}>
                <label>
                    nama:
                    <input 
                    type="text" 
                    ref={inputRef}
                    defaultValue=""
                    />
                </label>
                <button type="submit">submit</button>
            </form>
            {submittedValue && <P>Nilai dari ref: <strong>{submittedValue}</strong></P>}
        </div>
    )
}

export default Uncontrol;