import {
  createDefineBentoSprinklesFn,
  unconditionalProperties as bentoUnconditionalProperties,
  responsiveProperties as bentoResponsiveProperties,
  statusProperties as bentoStatusProperties,
} from '@buildo/bento-design-system';

const color = 'red'

const defineBentoSprinkles = createDefineBentoSprinklesFn();

const customBackgroundColors = {
  backgroundContratti: color,
  backgroundAvvocatoDedicato: color,
  backgroundConsulenze: color,
  backgroundAssociazione: color,
  backgroundPartitaIVA: color,
  backgroundSocieta: color,
  backgroundContabilita: color,
};

const customForegroundColors = {
  foregroundContratti: color,
  foregroundAvvocatoDedicato: color,
  foregroundConsulenze: color,
  foregroundAssociazione: color,
  foregroundPartitaIVA: color,
  foregroundSocieta: color,
  foregroundContabilita: color,
};

const statusProperties = {
  ...bentoStatusProperties,
  background: {
    ...bentoStatusProperties.background,
    ...customBackgroundColors,
    ...customForegroundColors,
  },
  color: {
    ...bentoStatusProperties.color,
    ...customForegroundColors,
    textColorPrimary50: color,
  },
  boxShadow: {
    ...bentoStatusProperties.boxShadow,
    outlineCardBig: `30px -30px 0px ${color}`,
    elevationBottom: `0 4px 0 -2px ${color}`,
  },
};

export const { sprinkles } = defineBentoSprinkles(
  bentoUnconditionalProperties,
  bentoResponsiveProperties,
  statusProperties
);
