import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@ecl/ec-react-component-button';
import ContentItem from '@ecl/ec-react-composition-content-item';
import Pagination from '@ecl/ec-react-component-pagination';
import Select from '@ecl/ec-react-component-select';
import Tag from '@ecl/ec-react-component-tag';

// Templates
import SiteHeaderCore from '@ecl/ec-react-component-site-header-core';
import SiteHeaderHarmonised from '@ecl/ec-react-component-site-header-harmonised';
import SiteHeaderStandardised from '@ecl/ec-react-component-site-header-standardised';
import PageHeaderCore from '@ecl/ec-react-component-page-header-core';
import PageHeaderHarmonised from '@ecl/ec-react-component-page-header-harmonised';
import PageHeaderStandardised from '@ecl/ec-react-component-page-header-standardised';
import FooterCore from '@ecl/ec-react-component-footer-core';
import FooterHarmonised from '@ecl/ec-react-component-footer-harmonised';
import FooterStandardised from '@ecl/ec-react-component-footer-standardised';

const SearchPage = ({ siteHeader, pageHeader, footer, template }) => (
  <Fragment>
    {template === 'core' && (
      <Fragment>
        <SiteHeaderCore {...siteHeader} data-ecl-auto-init="SiteHeaderCore" />
        <PageHeaderCore {...pageHeader} />
      </Fragment>
    )}
    {template === 'standardised' && (
      <Fragment>
        <SiteHeaderStandardised
          {...siteHeader}
          data-ecl-auto-init="SiteHeaderStandardised"
        />
        <PageHeaderStandardised {...pageHeader} />
      </Fragment>
    )}
    {template === 'harmonised-g1' && (
      <Fragment>
        <SiteHeaderHarmonised
          {...siteHeader}
          data-ecl-auto-init="SiteHeaderHarmonised"
          className="ecl-site-header-harmonised--group1"
        />
        <PageHeaderHarmonised {...pageHeader} />
      </Fragment>
    )}
    {template === 'harmonised-g2' && (
      <Fragment>
        <SiteHeaderHarmonised
          {...siteHeader}
          data-ecl-auto-init="SiteHeaderHarmonised"
          className="ecl-site-header-harmonised--group2"
        />
        <PageHeaderHarmonised {...pageHeader} />
      </Fragment>
    )}
    <div className="ecl-u-pv-3xl">
      <div className="ecl-container">
        <div className="ecl-row">
          <aside className="ecl-col-12 ecl-col-lg-3">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-lg-none ecl-u-mv-none">
              Search results (65)
            </h2>
            <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mt-l ecl-u-mt-lg-none">
              Search options
            </h3>
            <form>
              <Select
                id="facet-source"
                label="Source"
                width="m"
                options={[
                  {
                    value: '1',
                    label: 'All sources',
                  },
                  {
                    value: '2',
                    label: 'DG Trade',
                  },
                  {
                    value: '3',
                    label: 'DG Digit',
                  },
                ]}
              />
              <Select
                id="facet-date"
                groupClassName="ecl-u-mt-m"
                label="Date"
                width="m"
                options={[
                  {
                    value: '1',
                    label: 'All dates',
                  },
                  {
                    value: '2',
                    label: '2019',
                  },
                  {
                    value: '3',
                    label: '2018',
                  },
                ]}
              />
              <Select
                id="facet-language"
                groupClassName="ecl-u-mt-m"
                label="Language"
                width="m"
                options={[
                  {
                    value: '1',
                    label: 'English',
                  },
                  {
                    value: '2',
                    label: 'French',
                  },
                  {
                    value: '3',
                    label: 'German',
                  },
                  {
                    value: '3',
                    label: 'Bulgarian',
                  },
                ]}
              />
              <Select
                id="facet-format"
                groupClassName="ecl-u-mt-m"
                label="File format"
                width="m"
                options={[
                  {
                    value: '1',
                    label: 'All formats',
                  },
                  {
                    value: '2',
                    label: 'PDF',
                  },
                  {
                    value: '3',
                    label: 'DOC',
                  },
                ]}
              />
              <Button
                className="ecl-u-mt-l"
                label="Refine results"
                variant="primary"
              />
              <br />
              <Button
                className="ecl-u-mt-m ecl-u-mt-lg-l"
                label="Clear all"
                variant="secondary"
              />
            </form>
          </aside>
          <main className="ecl-col-12 ecl-col-lg-9">
            <h2 className="ecl-u-type-heading-2 ecl-u-type-color-black ecl-u-d-none ecl-u-d-lg-block ecl-u-mv-none">
              Search results (65)
            </h2>
            <h3 className="ecl-u-type-heading-3 ecl-u-type-color-black ecl-u-mb-none ecl-u-mt-3xl ecl-u-mt-lg-l">
              Showing results 11 to 20
            </h3>
            <div className="ecl-u-type-m ecl-u-type-color-grey ecl-u-mt-l ecl-u-d-flex ecl-u-flex-column ecl-u-flex-lg-row ecl-u-align-items-lg-center">
              <span>
                <span>SOURCE</span>
                <Tag
                  className="ecl-u-ml-s"
                  label="DG Trad"
                  variant="removable"
                  dismissButtonLabel="Dismiss"
                />
              </span>
              <span className="ecl-u-ml-lg-m ecl-u-mt-m ecl-u-mt-lg-none">
                <span>TOPICS</span>
                <Tag
                  className="ecl-u-ml-s"
                  label="Health, well-being & Consumer protection"
                  variant="removable"
                  dismissButtonLabel="Dismiss"
                />
              </span>
            </div>

            <ContentItem
              title={{
                href: '/example',
                label: 'Jobs, growth and investment',
              }}
              description={{
                label:
                  'Since the global economic and financial crisis, the EU has been suffering from low levels of investment. Coordinated efforts at European level are needed to put Europe on the path of economic recovery.',
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label: 'Digital single market',
              }}
              description={{
                label:
                  'The internet and digital technologies are transforming our world. But existing barriers online mean citizens miss out on goods and services, internet companies and start-ups have their horizons limited, and businesses and governments cannot fully benefit from digital tools.',
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label: 'Energy union and climate',
              }}
              description={{
                label:
                  "The EU is building an energy union that make sures Europe's energy supply is safe, viable and accessible to all. In doing so, it can boost the economy and attract investments that can create new jobs opportunities.",
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label: 'Internal market',
              }}
              description={{
                label:
                  'The single market is one of Europe’s major achievements and its best asset in times of increasing globalisation. It is an engine for building a stronger and fairer EU economy.',
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label: 'A deeper and fairer economic and monetary union',
              }}
              description={{
                label:
                  "Within the Economic and Monetary Union (EMU), EU countries' economic policies are coordinated to: make sure EU countries can withstand future crises through economic and social reforms and responsible fiscal policies, encourage investment and enhance competitiveness, deliver more job opportunities and better living standards",
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label:
                  'A balanced and progressive trade policy to harness globalisation',
              }}
              description={{
                label:
                  'In the modern global economy trade is essential for growth, jobs and competiveness, and the EU is committed to maintaining an open and rules-based trading system.',
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label: 'Justice and fundamental rights',
              }}
              description={{
                label:
                  'Every EU citizen enjoys the same fundamental rights based on the values of equality, non-discrimination, inclusion, human dignity, freedom and democracy.',
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label: 'Migration',
              }}
              description={{
                label:
                  'The plight of thousands of migrants putting their lives in peril to cross the Mediterranean has shocked. It is clear that no EU country can or should be left alone to address huge migratory pressures.',
              }}
            />

            <ContentItem
              title={{
                href: '/example',
                label: 'A stronger global actor',
              }}
              description={{
                label:
                  'The EU needs a strong common foreign policy to respond efficiently to global challenges, including the crises in its neighbourhood, project its values, reject protectionism and keep EU trade standards and contribute to peace and prosperity in the world.',
              }}
            />

            <ContentItem
              hasBorder="false"
              title={{
                href: '/example',
                label: 'Democratic change',
              }}
              description={{
                label:
                  'For the first time, in 2014, EU countries had to take the results of the elections into account when proposing a candidate for European Commission President.',
              }}
            />

            <Pagination
              className="ecl-u-mt-l"
              items={[
                {
                  isPrevious: true,
                  ariaLabel: 'Go to previous page',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: 'Previous',
                    iconPosition: 'before',
                    icon: {
                      shape: 'ui--corner-arrow',
                      size: 'xs',
                      transform: 'rotate-270',
                    },
                  },
                },
                {
                  ariaLabel: 'Go to page 1',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: '1',
                  },
                },
                {
                  isCurrent: true,
                  ariaLabel: 'Page 2',
                  label: '2',
                },
                {
                  ariaLabel: 'Go to page 3',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: '3',
                  },
                },
                {
                  ariaLabel: 'Go to page 4',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: '4',
                  },
                },
                {
                  isNext: true,
                  ariaLabel: 'Go to next page',
                  link: {
                    variant: 'standalone',
                    href: '/example',
                    label: 'Next',
                    iconPosition: 'after',
                    icon: {
                      shape: 'ui--corner-arrow',
                      size: 'xs',
                      transform: 'rotate-90',
                    },
                  },
                },
              ]}
            />
          </main>
        </div>
      </div>
    </div>
    {template === 'core' && <FooterCore {...footer} />}
    {template === 'standardised' && <FooterStandardised {...footer} />}
    {template === 'harmonised-g1' && (
      <FooterHarmonised {...footer} className="ecl-footer-harmonised--group1" />
    )}
    {template === 'harmonised-g2' && (
      <FooterHarmonised {...footer} className="ecl-footer-harmonised--group2" />
    )}
  </Fragment>
);

SearchPage.propTypes = {
  siteHeader: PropTypes.oneOfType([
    PropTypes.shape(SiteHeaderCore.propTypes),
    PropTypes.shape(SiteHeaderHarmonised.propTypes),
    PropTypes.shape(SiteHeaderStandardised.propTypes),
  ]),
  pageHeader: PropTypes.oneOfType([
    PropTypes.shape(PageHeaderCore.propTypes),
    PropTypes.shape(PageHeaderHarmonised.propTypes),
    PropTypes.shape(PageHeaderStandardised.propTypes),
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.shape(FooterCore.propTypes),
    PropTypes.shape(FooterHarmonised.propTypes),
    PropTypes.shape(FooterStandardised.propTypes),
  ]),
  template: PropTypes.string,
};

SearchPage.defaultProps = {
  siteHeader: {},
  pageHeader: {},
  footer: {},
  template: '',
};

export default SearchPage;
