/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { withFormik } from 'formik';

import { dogFiltersSchema } from '@/validations';
import {
    ADOPTION_STATUS_SELECT_PROPERTIES,
    COMPONENTS_CONTENT,
    DOGS_LIST_DEFAULT_FILTRATION,
    GENDERS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
} from '@/utils';
import {
    AgeInputsWrapper,
    FormContainer,
    FormTitle,
    RadioGroup,
    InputContainer,
    InputResetButton,
    Autocomplete,
    TextField,
    ClearIcon,
    SubmitButton,
    Icon,
    FormTitleContainer,
    FiltrationIcon,
    CloseFiltersIcon,
    FormInputsContainer,
    OpenFiltersIcon,
} from './DogFiltersForm.styled';

const DogFiltersForm = (props) => {
    const {
        disableSubmit,
        elevation = 0,
        errors,
        touched,
        racesList,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
        shouldHideOnSmallScreens,
    } = props;

    const [isFiltrationFormOpen, setIsFiltrationFormOpen] = useState(true);

    const handleGenderChange = (value) => setFieldValue('gender', value);
    const handleRaceChange = (_e, value) => setFieldValue('race', value || '');

    const handleStatusChange = (value) => {
        const isEmptyStatus = value !== 0 && !value;
        if (!isEmptyStatus) value = +value;

        setFieldValue('status', value);
    };

    const handleMinAgeChange = (event) => {
        const age = +event.target.value;

        const isInvalidAge = typeof age !== 'number';
        const isAgeNotInRange = age < MIN_DOG_AGE || age > MAX_DOG_AGE;
        if (isInvalidAge || isAgeNotInRange) return;

        setFieldValue('minAge', age);
    };

    const handleMaxAgeChange = (event) => {
        const age = +event.target.value;

        const isInvalidAge = typeof age !== 'number';
        const isAgeNotInRange = age < MIN_DOG_AGE || age > MAX_DOG_AGE;
        if (isInvalidAge || isAgeNotInRange) return;

        setFieldValue('maxAge', age);
    };

    const resetFieldValue = (fieldName, newValue = '') => {
        if (!fieldName) return;
        setFieldValue(fieldName, newValue);
    };

    const handleFormOpenStateChange = () => {
        setIsFiltrationFormOpen((isOpen) => !isOpen);
    };

    const openStateIconIndicator = isFiltrationFormOpen ? (
        <CloseFiltersIcon />
    ) : (
        <OpenFiltersIcon />
    );

    return (
        <FormContainer
            shouldHideOnSmallScreens={shouldHideOnSmallScreens}
            elevation={elevation}
        >
            <FormTitleContainer onClick={handleFormOpenStateChange}>
                <FiltrationIcon />
                <FormTitle>{COMPONENTS_CONTENT.DOG_FORM.TITLE}</FormTitle>
                {openStateIconIndicator}
            </FormTitleContainer>
            {isFiltrationFormOpen && (
                <FormInputsContainer>
                    <InputContainer>
                        <RadioGroup
                            error={errors.status && touched.status}
                            helperText={
                                touched.status && errors.status
                                    ? errors.status
                                    : ' '
                            }
                            label="Adoption Status"
                            name="status"
                            options={ADOPTION_STATUS_SELECT_PROPERTIES}
                            value={values.status}
                            onChange={handleStatusChange}
                        />
                        <InputResetButton
                            isButtonOfRadioGroup
                            onClick={() => resetFieldValue('status')}
                        >
                            <Icon
                                icon={<ClearIcon />}
                                tooltipText="Clear Adoption Status"
                            />
                        </InputResetButton>
                    </InputContainer>
                    <InputContainer>
                        <RadioGroup
                            error={errors.gender && touched.gender}
                            helperText={
                                touched.gender && errors.gender
                                    ? errors.gender
                                    : ' '
                            }
                            label="Gender"
                            name="gender"
                            options={GENDERS_SELECT_PROPERTIES}
                            value={values.gender}
                            onChange={handleGenderChange}
                        />
                        <InputResetButton
                            isButtonOfRadioGroup
                            onClick={() => resetFieldValue('gender')}
                        >
                            <Icon
                                icon={<ClearIcon />}
                                tooltipText="Clear Gender"
                            />
                        </InputResetButton>
                    </InputContainer>
                    <InputContainer>
                        <AgeInputsWrapper>
                            <TextField
                                error={errors.minAge && touched.minAge}
                                helperText={
                                    touched.minAge && errors.minAge
                                        ? errors.minAge
                                        : ' '
                                }
                                label="From Age"
                                name="minAge"
                                onBlur={handleBlur}
                                onChange={handleMinAgeChange}
                                type="number"
                                value={values.minAge}
                            />
                            <TextField
                                error={errors.maxAge && touched.maxAge}
                                helperText={
                                    touched.maxAge && errors.maxAge
                                        ? errors.maxAge
                                        : ' '
                                }
                                label="To Age"
                                name="maxAge"
                                onBlur={handleBlur}
                                onChange={handleMaxAgeChange}
                                type="number"
                                value={values.maxAge}
                            />
                            <InputResetButton
                                onClick={() => {
                                    resetFieldValue('minAge', 0);
                                    resetFieldValue('maxAge', 20);
                                }}
                            >
                                <Icon
                                    icon={<ClearIcon />}
                                    tooltipText="Clear Age Range"
                                />
                            </InputResetButton>
                        </AgeInputsWrapper>
                    </InputContainer>
                    <InputContainer>
                        <Autocomplete
                            error={errors.race && touched.race}
                            helperText={
                                touched.race && errors.race ? errors.race : ' '
                            }
                            fullWidth
                            label="Race"
                            name="race"
                            onBlur={handleBlur}
                            onChange={handleRaceChange}
                            options={racesList}
                            value={values.race}
                        />
                        <InputResetButton
                            onClick={() => resetFieldValue('race')}
                        >
                            <Icon
                                icon={<ClearIcon />}
                                tooltipText="Clear Race"
                            />
                        </InputResetButton>
                    </InputContainer>
                    <InputContainer>
                        <TextField
                            error={errors.name && touched.name}
                            helperText={
                                touched.name && errors.name ? errors.name : ' '
                            }
                            label="Name"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name}
                        />
                        <InputResetButton
                            onClick={() => resetFieldValue('name')}
                        >
                            <Icon
                                icon={<ClearIcon />}
                                tooltipText="Clear Name"
                            />
                        </InputResetButton>
                    </InputContainer>
                    <SubmitButton
                        onClick={handleSubmit}
                        disabled={disableSubmit}
                    >
                        {COMPONENTS_CONTENT.FILTER_DOGS_FORM.SUBMIT}
                    </SubmitButton>
                </FormInputsContainer>
            )}
        </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: () => DOGS_LIST_DEFAULT_FILTRATION,
    validationSchema: dogFiltersSchema,

    handleSubmit: async (values, { props }) => {
        props.onSubmit(values);
    },

    displayName: 'DogFiltersForm',
})(DogFiltersForm);
