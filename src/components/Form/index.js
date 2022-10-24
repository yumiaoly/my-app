import React, { createElement } from "react";
import { Field } from "@alifd/next";
import Item from "./Item";
import Reset from "./Reset";

const Form = (props) => {
  const { children, field: originField, onChange } = props;
  const field = originField || Field.useField({
    // onChange: (name, value)=> {
      
    // }
  });

    // field.setOptions({
    //   onChange: (name, value) => {
    //     onChange(field.getValues(),{name, value, field});
    //   },
    // });

  return (
    <form>

      {React.Children.map(children, (child) => {
        return <child.type {...child.props} field={field} onChange={onChange}/>;
        // return createElement(child.type, {...child.props, field}, child.props.children)
      })}
    </form>
  );
};

Form.Item = Item;
Form.Reset = Reset;

export default Form;
