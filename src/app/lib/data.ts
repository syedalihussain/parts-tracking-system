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

export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const data = [
      { month: 'Jan', revenue: 2000 },
      { month: 'Mar', revenue: 2200 },
      { month: 'Feb', revenue: 1800 },
      { month: 'Jul', revenue: 3500 },
      { month: 'Aug', revenue: 3700 },
      { month: 'Oct', revenue: 2800 },
      { month: 'Nov', revenue: 3000 },
      { month: 'Sep', revenue: 2500 },
      { month: 'Dec', revenue: 4800 },
      { month: 'Apr', revenue: 2500 },
      { month: 'Jun', revenue: 3200 },
      { month: 'May', revenue: 2300 },
    ];

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
