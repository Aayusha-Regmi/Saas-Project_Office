import React from 'react';
import Card from '../../components/common/Card';

const PricingSection = () => {
  const handleBuyNow = (plan) => {
    alert(`You selected the ${plan} plan. Redirecting to checkout...`);
  };
  
  const handleStartTrial = (plan) => {
    alert(`Starting your free trial for the ${plan} plan. Redirecting to registration...`);
  };
  
  const pricingPlans = [
    {
      id: 'simple-start',
      title: 'Simple Start',
      originalPrice: '19',
      discountedPrice: '9.50',
      savingsText: 'Save US$10/mo for 3 months',
      features: [
        'Track income & expenses',
        'Send unlimited custom invoices & quotes',
        'Connect your bank',
        'Track GST and VAT',
        'Insights & reports',
        'Progress invoicing',
        'For one user, plus your accountant'
      ]
    },
    {
      id: 'essentials',
      title: 'Essentials',
      originalPrice: '28',
      discountedPrice: '14',
      savingsText: 'Save US$14/mo for 3 months',
      features: [
        'Track income & expenses',
        'Send unlimited custom invoices & quotes',
        'Connect your bank',
        'Track GST and VAT',
        'Insights & reports',
        'Progress invoicing',
        'Manage bills & payments',
        'Track employee time',
        'Multi-currency',
        'For three users, plus your accountant'
      ]
    },
    {
      id: 'plus',
      title: 'Plus',
      originalPrice: '40',
      discountedPrice: '20',
      savingsText: 'Save US$20/mo for 3 months',
      features: [
        'Track income & expenses',
        'Send unlimited custom invoices & quotes',
        'Connect your bank',
        'Track GST and VAT',
        'Insights & reports',
        'Progress invoicing',
        'Manage bills & payments',
        'Track employee time',
        'Multi-currency',
        'Recurring transactions and bills',
        'Track inventory',
        'Track project profitability',
        'Manage budgets',
        'For five users, plus your accountant'
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced',
      originalPrice: '76',
      discountedPrice: '38',
      savingsText: 'Save US$38/mo for 3 months',
      features: [
        'Track income & expenses',
        'Send unlimited custom invoices & quotes',
        'Connect your bank',
        'Track GST and VAT',
        'Insights & reports',
        'Progress invoicing',
        'Manage bills & payments',
        'Track employee time',
        'Multi-currency',
        'Recurring transactions and bills',
        'Track inventory',
        'Track project profitability',
        'Manage budgets',
        'Manage users (up to 25)',
        'Automate workflows',
        'Custom reporting fields',
        'Customise dashboards',
        'Customise role permissions',
        'Backup online & restore data',
        'Manage revenue recognition'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-blue-50 rounded-full px-8 py-3 mb-6">
          <div className="bg-primary-light-blue text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl font-semibold mr-4">
            %
          </div>
          <h2 className="text-3xl font-semibold text-primary-light-blue">Pricing Plan</h2>
        </div>
        
        <h1 className="text-4xl font-semibold text-primary-blue mb-2">Let's Check Our Pricing</h1>
        <h2 className="text-4xl font-semibold text-primary-blue">Plan For You</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            title={plan.title}
            originalPrice={plan.originalPrice}
            discountedPrice={plan.discountedPrice}
            savingsText={plan.savingsText}
            features={plan.features}
            onBuyNow={() => handleBuyNow(plan.title)}
            onStartTrial={() => handleStartTrial(plan.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;