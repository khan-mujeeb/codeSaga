/* eslint-disable react/prop-types */
// Functional component for the PanelsContainer
export const PanelsContainer = ({ children }) => (
  <div className="panels-container">{children}</div>
);

export const Panel = ({ isLeft, children }) => (
  <div className={`panel ${isLeft ? "left-panel" : "right-panel"}`}>
    {children}
  </div>
);

export const Content = ({ title, description, buttonText, onClick }) => (
  <div className="content">
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="btn transparent" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

export const Image = ({ src, alt }) => (
  <img src={src} className="image" alt={alt} />
);
