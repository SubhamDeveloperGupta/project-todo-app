
import './Tag.css'

const Tag = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <button className="tag">{props.value}</button>
  )
}

export default Tag