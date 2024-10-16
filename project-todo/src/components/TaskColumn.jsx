
import PropTypes from 'prop-types';

const TaskColumn = ({titleValue}) => {
  return (
      <section className="task_column">
        <h1>{titleValue}</h1>
    </section>
  )
}

// Define prop types
TaskColumn.propTypes = {
    titleValue: PropTypes.string.isRequired,  // Marking it as required if necessary
};
  
  // Optionally, you can define default props
TaskColumn.defaultProps = {
    titleValue: 'Default Title',  // A fallback value if not provided
};

export default TaskColumn