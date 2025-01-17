import type { ReactNode } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import {
    type NavigateFunction,
    useNavigate,
    useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Dog, User } from '@/types';
import { DogProxy } from '@/proxies';
import { type RootState, getUserSelector } from '@/store';
import {
    APP_PATHS,
    FORM_SUBMIT_REDIRECT_DELAY,
    GENDERS_SELECT_PROPERTIES,
} from '@/utils';
import {
    Alert,
    DogImage,
    InfoContainer,
    Loader,
    MainContainer,
    Page,
    Snackbar,
    EditIcon,
    IconButton,
    Text,
    EditIconContainer,
    DogName,
    FemaleIcon,
    MaleIcon,
    TextAndIconContainer,
    VaccinatedIcon,
    DesexedIcon,
    InfoColumn,
    BasicInfoContainer,
} from './ViewDogPage.styled';

interface ViewDogPageProps {
    user: User;
}

function ViewDogPage({ user }: ViewDogPageProps): ReactNode {
    const [dogData, setDogData] = useState<Dog>(null);
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditable, setIsEditable] = useState(false);
    const { t } = useTranslation();

    const { dogId } = useParams();
    const isLoggedIn: boolean = !!user;

    const navigate: NavigateFunction = useNavigate();
    const navigateToDogsListPage = (): void => {
        setTimeout(
            () => navigate(APP_PATHS.dogsList),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };
    const navigateToLoginPage = (): void => navigate(APP_PATHS.login);
    const navigateToDogViewPage = () => {
        navigate(`${APP_PATHS.editDog}/${dogId}`);
    };

    async function fetchDogData(id: string): Promise<void> {
        setIsLoading(true);

        try {
            const fetchedDogData: Dog = await DogProxy.getDogByID({ id });
            if (!fetchedDogData) {
                throw Error("Error occurred while fetching dog's data");
            }

            setDogData(fetchedDogData);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setResponseState(false);
            navigateToDogsListPage();
        }
    }

    async function updateUserOwnerStatus(): Promise<void> {
        const isOwner: boolean = await DogProxy.isOwnerOfDog({
            id: dogId,
        });

        setIsEditable(isOwner);
    }

    useEffect(() => {
        if (!isLoggedIn) navigateToLoginPage();

        fetchDogData(dogId);
        updateUserOwnerStatus();
    }, []);

    useEffect(() => {
        if (responseState === false) fetchDogData(dogId);
    }, [responseState]);

    const alert = useMemo(() => {
        if (responseState === null) return null;

        const alertSeverity = responseState ? 'success' : 'error';
        const alertText = responseState
            ? t(`alert.dog.get.success`)
            : t(`alert.dog.get.failure`);
        return (
            <Alert severity={alertSeverity} variant="filled">
                {alertText}
            </Alert>
        );
    }, [responseState]);

    const dogAge: string = t('components.dog_view_information.age', {
        age: dogData?.age,
    });
    const dogGenderValue: string = GENDERS_SELECT_PROPERTIES.find(
        (genderProperty) => genderProperty.value === dogData?.gender
    )?.label;
    const dogGenderIcon: ReactNode =
        dogData?.gender === 'M' ? <MaleIcon /> : <FemaleIcon />;

    const dogRace: string = t('components.dog_view_information.breed', {
        breed: dogData?.breed,
    });
    const dogCharacteristics: string = t('components.dog_view_information.characteristics', {
        characteristics: dogData?.characteristics.join(', '),
    });
    const dogNotes: string = dogData?.notes && t('components.dog_view_information.notes', {
        notes: dogData.notes,
    });

    return isLoggedIn ? (
        <Page>
            {isLoading ? (
                <Loader />
            ) : (
                <MainContainer>
                    {isEditable && (
                        <EditIconContainer>
                            <IconButton
                                icon={<EditIcon />}
                                tooltipText="Edit Dog Information"
                                onClick={navigateToDogViewPage}
                            />
                        </EditIconContainer>
                    )}
                    <DogImage src={dogData?.image} />
                    <InfoContainer>
                        <DogName>{dogData?.name}</DogName>
                        <BasicInfoContainer>
                            <InfoColumn>
                                <TextAndIconContainer>
                                    <Text>{dogGenderValue}</Text>
                                    {dogGenderIcon}
                                </TextAndIconContainer>
                                <Text>{dogAge}</Text>
                            </InfoColumn>
                            <InfoColumn>
                                {dogData?.isVaccinated && (
                                    <TextAndIconContainer>
                                        <Text>
                                            {t(
                                                'components.dog_view_information.vaccinated'
                                            )}
                                        </Text>
                                        <VaccinatedIcon />
                                    </TextAndIconContainer>
                                )}
                                {dogData?.isDesexed && (
                                    <TextAndIconContainer>
                                        <Text>
                                            {t(
                                                'components.dog_view_information.desexed'
                                            )}
                                        </Text>
                                        <DesexedIcon />
                                    </TextAndIconContainer>
                                )}
                            </InfoColumn>
                        </BasicInfoContainer>
                        <Text>{dogRace}</Text>
                        <Text>{dogCharacteristics}</Text>
                        {dogData?.notes && <Text>{dogNotes}</Text>}
                    </InfoContainer>
                </MainContainer>
            )}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={() => setResponseState(null)}
                open={responseState !== null}
            >
                {alert}
            </Snackbar>
        </Page>
    ) : null;
}

const mapStateToProps = (state: RootState) => ({
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(ViewDogPage);
