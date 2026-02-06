import '@testing-library/jest-dom';

// Mock Highcharts dla testów
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

// Setup DOM przed każdym testem
beforeEach(() => {
  document.body.innerHTML = '<div id="container"></div>';
});

// Cleanup po każdym teście
afterEach(() => {
  document.body.innerHTML = '';
  jest.clearAllMocks();
});
