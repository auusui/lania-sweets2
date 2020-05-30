import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, DateField, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Stuffs } from '../../api/stuff/Stuff';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  info: String,
  date: Number,
  item: String,
  quantity: Number,
  description: String,
  allergies: String,
  method: {
    type: String,
    allowedValues: ['delivered', 'pick-up'],
  },
  owner: String,
});

/** Renders the Page for adding a document. */
class MYO extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, info, date, item, quantity, description, allergies, method } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, info, date, item, quantity, description, allergies, method, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Make Your Own Order</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <TextField name='Contact Info'/>
                <DateField name='Date and Time You Want the Order Ready By'/>
                <TextField name='Bakery Item Name'/>
                <NumField name='quantity' decimal={false}/>
                <LongTextField name='Instructions/Substitutions'/>
                <TextField name='Allergies'/>
                <SelectField name='Order Method'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default MYO;
