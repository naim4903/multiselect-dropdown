import { default as Select, components } from 'react-select';

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const MultiSelect = ({ value = [], readonly = false }) => {
    return (
        <Select
            controlShouldRenderValue={false}
            isOptionDisabled={(val) => readonly}
            options={value}
            placeholder="Select Item"
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option }}
            onChange={(selectedOption) => {
                console.log(selectedOption)
            }}
        />
    )
};

export default MultiSelect;