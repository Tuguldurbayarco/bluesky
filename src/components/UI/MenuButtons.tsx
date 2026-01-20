import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";

function MenuButtons(lang: string) {
  const validLocale = isValidLocale(lang as Locale) ? (lang as Locale) : defaultLocale;
  const t = createTranslator(validLocale);
  
  return {
    label1: t('Index.menu.0.label'),
    label2: t('Index.menu.1.label'),
    label3: t('Index.menu.2.label'),
    label4: t('Index.menu.3.label'),
    label5: t('Index.menu.4.label'),
  };
}

export default MenuButtons  

//interface MenuButtonsProps {
//  children: ReactNode;
//  t: (key: string) => string;
//}

//const MenuButtons: React.FC<MenuButtonsProps> = ({ children, t }) => {
/*
function MenuButtons({children}: { children: React.ReactNode }) {
  
    return (
    <>
      <div style={{display: "flex"}}>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{t(`menu.${index}.title`)}</div> 
        ))}
      </div>
    </>
  )
}

export default MenuButtons    
*/
/*
{React.Children.map(children, (child, index) => {
            // Проверяем, является ли текущий дочерний элемент Link
              if (React.isValidElement(child) && child.type === 'Link') {
                return (
                  <div key={index}>
                    {child}
                  </div>
                );
              }
              return null; // Пропускаем элементы, которые не являются Link
            })}
*/