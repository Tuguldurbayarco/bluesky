import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import ImageGallery from "@/components/UI/ImageGallery";
import ScrollDownHint from "@/components/UI/ScrollDownHint";
import { getGalleryMedia } from "@/lib/gallery";

const Gallery = async ({ params: { locale } }: { params: { locale: string } }) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  const media = await getGalleryMedia();

  return (
    <div>
      <div style={{position: "relative"}}>
        <img
          src='/gallery/gallery.jpg'
          alt='Gallery'
          width='100%'
        />
        <ScrollDownHint lightBackground />
      </div>
      <div className='visibility_area' style={{textAlign: "center"}}>
        <h2 className="pageTitle" style={{marginTop: '8rem'}}>{t("Gallery.sectionTitle")}</h2>
        <p className="pageDescription" style={{marginBottom: '5rem'}}>
          {t("Gallery.pageDescription")}
        </p>
        <ImageGallery media={media} />
      </div>
    </div>
  );
}

export default Gallery;
