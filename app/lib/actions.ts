'use server';

export async function createInvoice(formData: FormData) {

    // const rawFormData = Object.fromEntries(formData.entries())
    const rawFormData = {
        amount: formData.get('amount'),
        customerId: formData.get('customerId'),
        status: formData.get('status')
    };

    console.log(rawFormData)
}