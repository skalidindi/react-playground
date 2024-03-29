import PropTypes from 'prop-types';

export function withLoggingHOC(Component) {
  const WithLogging = (props) => {
    const onClick = () => {
      console.log('we logged library');
      props.onClick();
    }

    return <Component {...props} onClick={onClick} />;
  };

  WithLogging.displayName = `WithLogging${Component.displayName || Component.name}`;
  WithLogging.propTypes = {
    onClick: PropTypes.func,
  };
  return WithLogging;
}
