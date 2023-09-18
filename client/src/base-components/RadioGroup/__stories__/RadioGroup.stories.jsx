import React from 'react';

import {
    StoryPage,
    ColumnBox,
    InlineBox,
    StoryContentWrapper,
} from './RadioGroup.stories.styled';
import RadioGroup from '../RadioGroup';

const MUI_COLORS = ['primary', 'success', 'warning', 'error', 'info'];
const simpleOptionsExample = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
];

export default {
    title: 'base-components/RadioGroup',
    parameters: {
        controls: { exclude: /^(options|defaultValue|onRadioSelect)$/g },
    },
    decorators: [
        (Story) => (
            <StoryPage>
                <StoryContentWrapper>
                    <Story />
                </StoryContentWrapper>
            </StoryPage>
        ),
    ],
    component: RadioGroup,
};

export const Default = () => <RadioGroup />;

const Template = (args) => (
    <RadioGroup options={simpleOptionsExample} {...args} />
);

export const Custom = Template.bind({});
Custom.argTypes = {
    color: {
        control: 'inline-radio',
        options: MUI_COLORS,
        defaultValue: MUI_COLORS?.[0],
    },
    error: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    label: { control: { type: 'text' }, defaultValue: 'RadioGroup label' },
    labelPlacement: {
        control: 'inline-radio',
        options: ['top', 'start', 'bottom', 'end'],
        defaultValue: 'end',
    },
    row: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    size: {
        control: 'inline-radio',
        options: ['small', 'medium', 'large'],
        defaultValue: 'medium',
    },
    disabled: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
};

export const Labeled = () => {
    const coloredOptions = [
        { label: 'Labeled', value: 'Labeled' },
        { label: '', value: 'Unlabeled' },
    ];

    return <RadioGroup options={coloredOptions} />;
};

export const RowDisplay = () => {
    return (
        <ColumnBox>
            <RadioGroup label="Normal" options={simpleOptionsExample} />
            <RadioGroup label="Row" options={simpleOptionsExample} row />
        </ColumnBox>
    );
};

export const Disabled = () => {
    return (
        <InlineBox>
            <RadioGroup label="Normal" options={simpleOptionsExample} />
            <RadioGroup
                label="Disabled"
                options={simpleOptionsExample}
                disabled
            />
        </InlineBox>
    );
};

export const Error = () => {
    return (
        <InlineBox>
            <RadioGroup label="Normal" options={simpleOptionsExample} />
            <RadioGroup label="Error" options={simpleOptionsExample} error />
        </InlineBox>
    );
};

export const LabelPlacements = () => {
    const placements = ['Top', 'End', 'Start', 'Bottom'];

    return (
        <InlineBox>
            {placements.map((placement) => (
                <RadioGroup
                    options={simpleOptionsExample}
                    label={placement}
                    labelPlacement={placement.toLowerCase()}
                />
            ))}
        </InlineBox>
    );
};

export const Colored = () => {
    // All set to the same value, to display them as active and observe their colors.
    const mutualValue = 'coloredRadio';
    const colorsOptions = MUI_COLORS.map((color) => {
        return { label: color, value: mutualValue, color };
    });

    return <RadioGroup options={colorsOptions} defaultValue={mutualValue} />;
};

export const Sizes = () => {
    const sizesOptions = ['Small', 'Medium', 'Large'].reverse().map((size) => {
        return { label: size, value: size, size: size.toLowerCase() };
    });

    return <RadioGroup options={sizesOptions} />;
};