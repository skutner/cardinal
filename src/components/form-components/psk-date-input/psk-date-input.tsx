import { h, Component, Prop } from '@stencil/core';
import { BindModel } from '../../../decorators/BindModel';
import { TableOfContentProperty } from '../../../decorators/TableOfContentProperty';
import CustomTheme from '../../../decorators/CustomTheme';
import moment from 'moment'
@Component({
    tag: 'psk-date-input'
})
export class PskDateInput {
    
    @Prop() dataDate?: any
    
    @CustomTheme()

    @BindModel() modelHandler;

    render() {
        return <psk-input
            type="date"
            label={this.label}
            name={this.name}
            value={this.value}
            dataDate={this.dataDate}
            placeholder={this.placeholder}
            required={this.required}
            readOnly={this.readOnly}
            data-date={this.value}
            dateClass={this.dataFormat ? "formated-date" : null}
            dataDateFormat = {this.dataFormat ? this.dataFormat : null}
            invalidValue={this.invalidValue}
            specificProps={{
                onKeyUp: this.__inputHandler.bind(this),
                onChange: this.__inputHandler.bind(this)
            }} />
    }

    __inputHandler = (event) => {
        event.stopImmediatePropagation();
        let value = event.target.value;
        if(this.dataFormat){
            this.dataDate = moment(value, "YYYY-MM-DD").format( this.dataFormat )
        }
        this.modelHandler.updateModel('value', this.dataDate);
    };

    @TableOfContentProperty({
        description: [`By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.`],
        isMandatory: false,
        propertyType: 'string',
        specialNote: `If this property is not provided, the component will be displayed without any label`
    })
    @Prop() label?: string | null = null;

    @TableOfContentProperty({
        description: [`Specifies the value of an psk-date-input component.`,
            `This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.`,
            `This property should respect the format give nto the data-format property.`],
        isMandatory: false,
        propertyType: 'string'
    })
    @Prop() value?: string | null = null;

    @TableOfContentProperty({
        description: [`Specifies the name of a psk-date-input component. It is used along with the psk-label component.`],
        isMandatory: false,
        propertyType: 'string'
    })
    @Prop() name?: string | null = null;

    @TableOfContentProperty({
        description: [`Specifies a short hint that describes the expected value of an psk-date-input component`],
        isMandatory: false,
        propertyType: 'string'
    })
    @Prop() placeholder?: string | null = null;

    @TableOfContentProperty({
        description: [`Specifies that an input field must be filled out before submitting the form.`,
            `Accepted values: "true" and "false"`],
        isMandatory: false,
        propertyType: 'boolean',
        defaultValue: "false"
    })
    @Prop() required?: boolean = false;

    @TableOfContentProperty({
        description: [`	Specifies that an input field is read-only.`,
            `Accepted values: "true" and "false"`],
        isMandatory: false,
        propertyType: 'boolean',
        defaultValue: "false"
    })
    @Prop() readOnly?: boolean = false;

    @TableOfContentProperty({
        description: [`This property indicates if the value entered by the user is a valid one according to some validation present in the controller.`],
        isMandatory: false,
        propertyType: 'boolean'
    })
    @Prop() invalidValue?: boolean | null = null;
    @TableOfContentProperty({
        isMandatory: false,
        description: `This property is the format of the date, it can take these two values "DD MM YYYY" and"YYYY MM DD"`,
        propertyType: 'string'
    })
    @Prop() dataFormat?: string | null = null

}
