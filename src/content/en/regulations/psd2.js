export default {
  slug: 'psd2',
  order: 1,
  title: 'PSD2',
  fullTitle: 'Revised Payment Services Directive — (EU) 2015/2366',
  region: 'intl',
  kind: 'regulation',
  summary:
    'The directive governing the EU payment services market, which directly affects banks’ digital channels through strong customer authentication, third-party access and security requirements.',
  topic: 'psd2',
  keyFacts: [
    { label: 'Official number', value: 'Directive (EU) 2015/2366' },
    { label: 'Application in Member States', value: '13 January 2018' },
    { label: 'RTS on SCA and secure communication', value: 'Commission Delegated Regulation (EU) 2018/389' },
    { label: 'RTS application', value: '14 September 2019' },
  ],
  scope: [
    'PSD2 (the second Payment Services Directive) regulates the activities of payment service providers, customer rights and the security of payment transactions in the European Union. As a directive, it is transposed by each Member State into national law, so details can differ from country to country in practice. Banks, electronic money institutions and payment institutions are directly in scope.',
    'For banking software, the directive’s most visible impact is in two areas: Strong Customer Authentication (SCA) and access to payment accounts, with the customer’s consent, by licensed third-party providers (account information and payment initiation service providers). The technical details of both are defined in regulatory technical standards (RTS) drafted by the European Banking Authority (EBA) and adopted by the Commission.',
    'PSD2 also covers the management of operational and security risks, the reporting of major operational or security incidents to the competent authority, and the related EBA guidelines. With DORA in force, the incident reporting framework for entities within DORA’s scope has largely moved to DORA; institutions should confirm from current texts which regime applies to them. A revision process (the PSD3 and Payment Services Regulation proposals) is under way in the EU.',
    'For QA teams, PSD2 compliance means producing evidence not only of functional correctness but also of security and availability. SCA flows contain many branches — successful authentication, failed attempts, session timeouts, and transactions with and without exemptions applied — and the expected behaviour of each branch should be documented. For the third-party access interface, versioning, the consent lifecycle, authorisation scope and consistency of error codes should be treated as separate headings in the test plan. The results of these tests should be retained in a form that can be referenced during audits and competent authority requests.',
  ],
  expects: [
    'Strong customer authentication based on at least two of knowledge, possession and inherence elements for remote access, initiation of electronic payments and risky transactions.',
    'Dynamic linking of the authentication code to the transaction amount and payee for remote payment transactions.',
    'A secure, documented access interface for third-party providers; where a dedicated interface is chosen, it must offer availability and performance comparable to the customer interface.',
    'Provision of a testing facility, with support, so that third-party providers can test connectivity and functionality.',
    'Documentation, periodic testing, evaluation and auditing of SCA and related security measures.',
    'A framework for managing operational and security risks, and reporting of major incidents to the competent authority.',
    'Exemptions (e.g. low-value or low-risk transactions) applied in line with the rules and in a traceable way.',
  ],
  testTypes: [
    {
      slug: 'guvenlik-testi',
      level: 'required',
      why: 'The RTS explicitly requires SCA and secure communication measures to be periodically tested, evaluated and audited.',
    },
    {
      slug: 'api-acik-bankacilik-testi',
      level: 'expected',
      why: 'Conformance of the third-party access interface to its contract, security requirements and error scenarios is most directly verified through API testing.',
    },
    {
      slug: 'performans-yuk-testi',
      level: 'expected',
      why: 'Showing that the dedicated interface offers availability and performance comparable to customer channels requires load and performance measurement.',
    },
    {
      slug: 'mobil-uygulama-testi',
      level: 'expected',
      why: 'Most SCA flows run in mobile apps, relying on components such as device binding and biometrics.',
    },
    {
      slug: 'test-otomasyonu',
      level: 'supporting',
      why: 'Keeps regression sustainable across SCA scenarios, exemption rules and API version changes.',
    },
    {
      slug: 'test-analizi-kalite-metrikleri',
      level: 'supporting',
      why: 'Indicators such as interface availability, error rates and test coverage produce evidence for audits and reporting.',
    },
  ],
  officialSource: {
    label:
      'European Parliament and Council — Directive (EU) 2015/2366; Commission Delegated Regulation (EU) 2018/389 (RTS on SCA and secure communication)',
    url: 'https://eur-lex.europa.eu/eli/dir/2015/2366/oj',
  },
};
