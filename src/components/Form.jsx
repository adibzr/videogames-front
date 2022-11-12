export default function FormInput(props) {
  const { label, errorMessage, onChange, onInvalid, ...inputProps } = props;

  return (
    <div className={`${label} form-item`}>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onInvalid={onInvalid} />
      <span className="form-error">{errorMessage}</span>
    </div>
  );
}
