import axios from 'axios';

describe('POST /users/auth/otp/email', () => {
    it('should send OTP email and return success response', async () => {
        const payload = {
            email: 'kosta@humanity.org',
            source: 'humanity'
        };

        const response = await axios.post(
            'https://staging-moongate-api.humanity.org/users/auth/otp/email',
            payload
        );

        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        expect(response.data.email).toBe('kosta@humanity.org');
    });

    it('should handle invalid email gracefully', async () => {
        const payload = {
            email: 'invalid-email',
            source: 'humanity'
        };

        try {
            await axios.post(
                'https://staging-moongate-api.humanity.org/users/auth/otp/email',
                payload
            );
        } catch (error: any) {
            expect(error.response.status).toBe(400);
        }
    });
});