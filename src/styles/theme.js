const deviceSizes = {
  mobile: '600px',
  tablet: '768px',
  laptop: '1280px',
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `only screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
};
export default theme;
