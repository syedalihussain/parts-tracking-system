import { formatCurrency } from './utils';

export async function fetchCardData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const numberOfInvoices = Number('0');
    const numberOfCustomers = Number('0');
    const totalPaidInvoices = formatCurrency(Number('0'));
    const totalPendingInvoices = formatCurrency(Number('0'));

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}
