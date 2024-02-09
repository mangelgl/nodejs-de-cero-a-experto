import exp from "constants";
import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template', () => {

    it('emailTemplate should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi, ');
    });

    it('emailTemplate should contain an order ID', () => {
       expect(emailTemplate).toContain('Order ID: ');
    });

    it('emailTemplate should contain {{name}} and {{orderId}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);

        // expect(emailTemplate).toContain('{{name}}');
        // expect(emailTemplate).toContain('{{orderId}}');
    })
})