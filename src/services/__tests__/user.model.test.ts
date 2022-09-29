import { createNewUser } from '../user.service';
import { IUser } from '../../interfaces/user.interface';

describe('user model tests', () => {
    test('isAdmin flag not set', async () => {
        const userTest = {
            username: 'user-model-test-is-admin-false',
            password: 'admin123',
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', false);
    });

    test('isAdmin flag set', async () => {
        const userTest = {
            username: 'user-model-test-is-admin',
            password: 'admin123',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', true);
    });

    test(`fullName field set`, async () => {
        const userTest = {
            username: 'user-model-test-fullname',
            password: 'admin123',
            fullName: 'test-user',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('fullName', userTest.fullName);
    });

    test(`fullName field default is 'Anonymous'`, async () => {
        const userTest = {
            username: 'user-model-test-fullname-default',
            password: 'admin123',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('fullName', 'Anonymous');
    });
});