import React from 'react';
import Form from '../../components/Form';
import { Input, Button } from '@alifd/next';
import { connect } from 'react-redux';
const FormItem = Form.Item;

const FormPage = (props) => {
    console.log(props, 1111)

    const onChange = (values) => {
        console.log('onFormChange', values)
    }

    return (
        <>
            <Form onChange={onChange} >
                <FormItem label="name:" name="name">
                    <Input />
                </FormItem>
                <FormItem label="age:" name="age">
                    <Input />
                </FormItem>
                <FormItem label=" " colon={false}>
                    {/* <Form.Submit
                    type="primary"
                    validate
                    onClick={this.handleSubmit}
                    style={{ marginRight: 8 }}
                >
                    Submit
                </Form.Submit> */}
                    <Form.Reset>Reset</Form.Reset>
                </FormItem>
            </Form>
            <Button type="primary" onClick={()=>{props.dispatch({type:'add', inputValue: 2, name:'bbb'})}}>add</Button>
            <div>{props.inputValue}</div>
            <div>{props.name}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        name: state.name,
    }
}

export default connect(mapStateToProps, null)(FormPage);
// export default connect(({inputValue})=>({inputValue}),null)(FormPage);