/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import EventAgendaPageExample from '../examples/Default';

storiesOf('Templates|Pages', module)
  .addDecorator(withKnobs)
  .add('Event agenda', () => {
    const template = radios(
      'Template',
      {
        Core: 'core',
        Standardised: 'standardised',
        'Harmonised group 1': 'harmonised-g1',
        'Harmonised group 2': 'harmonised-g2',
      },
      'core'
    );

    return <EventAgendaPageExample template={template} />;
  });
