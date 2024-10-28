import "./style.css";

export default function MyInput({ label, setValue }) {
  return (
    <div className="input-box">
      <label className="label-text">{label}</label>
      <input
        id="name"
        className="name-input"
        type="text"
        maxlength={15}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
