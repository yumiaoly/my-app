import React from 'react';

const Item = (props) => {
  const {children, name, field, label, onChange: onFormChange} = props;
  const init = field.init(name);

  const onChange = (event) => {
    init.onChange(event.target.value);
    const values = field.getValues();
    onFormChange(values);
  }

  const child = children?.length ? children[0] : children;

  return (
    <div style={{display: 'flex'}}>
      <div>{label}</div>
      <div>
        {/* <child.type {...child.props} {...init} onChange={onChange}/> */}
        {
          React.Children.map(children, (child) => {
            return <child.type {...child.props} {...init} field={field} onChange={onChange} />
          })
        }
      </div>
    </div>
  )
}

export default Item;