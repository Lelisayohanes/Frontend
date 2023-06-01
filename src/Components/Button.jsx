import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ color, variant, children, onClick }) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
CustomButton.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};


// const CustomButton = ({ color, variant, children, onClick }) => {
//   return (
//     <Button
//       color={color}
//       variant={variant}
//       onClick={onClick}
//     >
//       {children}
//     </Button>
//   );
// };

export default CustomButton;
