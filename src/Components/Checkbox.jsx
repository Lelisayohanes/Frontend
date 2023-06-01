import PropTypes from 'prop-types';
import '../Css/Checkbox.css'; // Import the CSS file for styling

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom"></span>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
