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

export async function fetchLatestInvoices() {
  try {
    const latestInvoices = [
      {
        amount: '$447.00',
        name: 'Michael Novotny',
        image_url: '/customers/michael-novotny.png',
        email: 'michael@novotny.com',
        id: 'e16de4ef-e5af-4175-8c79-de46883de27f',
      },
      {
        amount: '$5.00',
        name: 'Delba de Oliveira',
        image_url: '/customers/delba-de-oliveira.png',
        email: 'delba@oliveira.com',
        id: '223b7c7f-6df0-4a75-9917-f48eb63a18c7',
      },
      {
        amount: '$345.77',
        name: 'Balazs Orban',
        image_url: '/customers/balazs-orban.png',
        email: 'balazs@orban.com',
        id: 'cb8799ae-069d-4ea9-9581-ebe22c886a26',
      },
      {
        amount: '$542.46',
        name: 'Lee Robinson',
        image_url: '/customers/lee-robinson.png',
        email: 'lee@robinson.com',
        id: '57ec601c-fa64-46fc-9f7c-3082ccc93dc5',
      },
      {
        amount: '$6.66',
        name: 'Evil Rabbit',
        image_url: '/customers/evil-rabbit.png',
        email: 'evil@rabbit.com',
        id: 'ebe04c38-28a6-4f84-8638-b7997cd4bec4',
      },
    ];
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}
