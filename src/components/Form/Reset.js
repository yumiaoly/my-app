import React from 'react';
import { Button} from '@alifd/next';

const Reset = (props) => {
    const { field, ...rest } = props;

    const initValues = {};
    field.getNames().forEach(name=>{
        initValues[name] = '';
    })
    
    const onClick = () => {
        // console.log(field.getNames())
        // field?.reset(field.getNames());
        field?.setValues(initValues);
    }

    return <Button {...rest} onClick={onClick}  />
}

export default Reset;