import PropTypes from 'prop-types';
import '../Css/Input.css'
const Input = ({ type, value, onChange, placeholder }) => {
    return (
        <input
            className="custom-input"
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

    Input.propTypes = {
        type: PropTypes.string,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
    };

export default Input;
