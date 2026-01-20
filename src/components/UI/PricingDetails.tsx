import React from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";

type PricingDetailsProps = {
  locale?: Locale;
};

const PricingDetails: React.FC<PricingDetailsProps> = ({ locale }) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);

  return (
    <div style={{ 
      marginTop: '0',
      marginBottom: '0',
      padding: '2rem 2rem 1rem 2rem', 
      backgroundColor: '#fff', 
      borderRadius: '12px',
      width: '100%'
    }}>
      <p style={{ marginBottom: '1rem', fontSize: '110%' }}>
        {t('Tours.pricing_info.intro')}
      </p>
      <p style={{ marginBottom: '2rem', fontSize: '100%' }}>
        {t('Tours.pricing_info.intro_detail')}
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginTop: '1.5rem'
      }} className="pricing-details-grid">
        <div>
          <h3 style={{ 
            marginBottom: '1rem', 
            fontSize: '150%', 
            fontWeight: 700
          }}>
            {t('Tours.pricing_info.included_title_prefix')}{' '}
            <strong style={{ textDecoration: 'underline' }}>{t('Tours.pricing_info.included_title_word')}</strong>
            {' '}{t('Tours.pricing_info.included_title_suffix')}
          </h3>
          <ul style={{ 
            listStyle: 'disc', 
            paddingLeft: '1.5rem',
            lineHeight: '1.8'
          }}>
            {(() => {
              const items = t('Tours.pricing_info.included_items', { returnObjects: true });
              return Array.isArray(items) ? items.map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              )) : null;
            })()}
          </ul>
        </div>
        <div>
          <h3 style={{ 
            marginBottom: '1rem', 
            fontSize: '150%', 
            fontWeight: 700
          }}>
            {t('Tours.pricing_info.excluded_title_prefix')}{' '}
            <strong style={{ textDecoration: 'underline' }}>{t('Tours.pricing_info.excluded_title_word')}</strong>
            {' '}{t('Tours.pricing_info.excluded_title_suffix')}
          </h3>
          <ul style={{ 
            listStyle: 'disc', 
            paddingLeft: '1.5rem',
            lineHeight: '1.8'
          }}>
            {(() => {
              const items = t('Tours.pricing_info.excluded_items', { returnObjects: true });
              return Array.isArray(items) ? items.map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              )) : null;
            })()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
