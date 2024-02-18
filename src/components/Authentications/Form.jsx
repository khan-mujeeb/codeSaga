/* eslint-disable react/prop-types */
export const Form = ({ title, children }) => (
  <form action="#" className={`form ${title.toLowerCase()}-form`}>
    <h2 className="title font-bold">{title.replace("-", " ").toUpperCase()}</h2>
    {children}
  </form>
);

export const InputField = ({ type, placeholder, setData }) => (
  <div className="input-field">
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        setData(e.target.value);
      }}
    />
  </div>
);
