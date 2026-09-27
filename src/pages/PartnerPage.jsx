import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Icon from '../components/Icon';
import { Link } from '../components/L';
import { BulletList, MeetingCta, PageHeader, Photo, Section, usePageTitle } from '../components/blocks';
import { PAGE_IMAGES } from '../config/images';
import { SITE } from '../config/site.config';
import { useContent } from '../content';

export default function PartnerPage() {
  const { t } = useTranslation();
  const { TEST_TYPES } = useContent();
  usePageTitle(t('partner.pageTitle'));
  // Ürün → ilgili rehber sayfası
  const productGuide = (key) => TEST_TYPES.find((x) => x.product === key);

  return (
    <>
      <PageHeader
        crumbs={[{ label: t('partner.crumb') }]}
        eyebrow={t('partner.eyebrow')}
        title={SITE.partner.name}
        subtitle={t('site.partnerSummary')}
        image={PAGE_IMAGES.partner}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/toplanti-talebi" className="btn btn-primary">{t('partner.request')}</Link>
          <a href={SITE.partner.url} target="_blank" rel="noreferrer" className="btn btn-outline">
            {SITE.partner.url.replace('https://', '')} <ExternalLink className="size-4" aria-hidden="true" />
            <span className="sr-only">{t('common.newTab')}</span>
          </a>
        </div>
      </PageHeader>

      <div className="container-x flex max-w-6xl flex-col gap-16 py-12">
        <Section id="uzmanlik" title={t('partner.expertiseTitle')}>
          <BulletList items={t('partner.expertise', { returnObjects: true })} />
        </Section>

        <Section id="cozumler" title={t('partner.solutionsTitle')}>
          <ul className="grid gap-4 md:grid-cols-2">
            {Object.entries(SITE.products).map(([key, cfg]) => {
              const p = t(`products.${key}`, { returnObjects: true });
              const guide = productGuide(key);
              return (
                <li key={key} className="card flex flex-col p-6">
                  <p className="text-sm font-semibold text-accent">{p.kind}</p>
                  <h3 className="mt-1 text-xl font-semibold text-fg">{p.name}</h3>
                  <p className="mt-3 flex-1 text-muted">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                    {guide && (
                      <Link to={`/test-turleri/${guide.slug}`} className="inline-flex items-center gap-1.5 text-accent underline underline-offset-2 hover:decoration-2">
                        <Icon name={guide.icon} className="size-4" /> {t('partner.guide', { title: guide.title })}
                      </Link>
                    )}
                    {cfg.url && (
                      <a href={cfg.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-fg hover:underline">
                        {t('partner.productSite')} <ExternalLink className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">{t('common.newTab')}</span>
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="core-banking" title={t('partner.coreTitle')}>
          <Photo src={PAGE_IMAGES.partnerCore} className="mb-4 aspect-[21/8]" />
          <div className="card grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-fg">Mambu</h3>
              <p className="mt-2 text-muted">{t('partner.mambuText')}</p>
              {SITE.showClientReference && <p className="mt-3 text-sm text-muted">{t('site.clientNote')}</p>}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-fg">Fimple</h3>
              <p className="mt-2 text-muted">{t('partner.fimpleText')}</p>
            </div>
            <Link to="/test-turleri/core-banking-testleri" className="inline-flex items-center gap-1.5 font-semibold text-accent underline underline-offset-2 hover:decoration-2 md:col-span-2">
              {t('partner.coreLink')} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Section>

        <MeetingCta topic="corebanking" title={t('partner.ctaTitle')} />
      </div>
    </>
  );
}
