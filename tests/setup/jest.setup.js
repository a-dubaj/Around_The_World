import '@testing-library/jest-dom';

global.Highcharts = {
  maps: {
    'custom/world': {},
    'countries/us/us-all': {},
    'countries/in/custom/in-all-disputed': {}
  },
  mapChart: jest.fn((container, config) => {
    return {
      container,
      config,
      series: [],
      update: jest.fn(),
      destroy: jest.fn()
    };
  })
};

beforeEach(() => {
  document.body.innerHTML = '<div id="container"></div>';
});

afterEach(() => {
  document.body.innerHTML = '';
  jest.clearAllMocks();
});
