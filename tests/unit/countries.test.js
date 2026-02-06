import {
  isValidCountryCode,
  hasNoDuplicates,
  arraysDoNotOverlap
} from '../helpers/testUtils';

const visited_countries = ['pl', 'de', 'fr', 'gb'];
const pending_countries = ['us', 'ca', 'jp'];

describe('Country Arrays Configuration', () => {
  describe('Visited Countries', () => {
    test('all entries are valid country codes', () => {
      visited_countries.forEach(code => {
        expect(isValidCountryCode(code)).toBe(true);
      });
    });

    test('contains no duplicates', () => {
      expect(hasNoDuplicates(visited_countries)).toBe(true);
    });

    test('is not empty', () => {
      expect(visited_countries.length).toBeGreaterThan(0);
    });
  });

  describe('Pending Countries', () => {
    test('all entries are valid country codes', () => {
      pending_countries.forEach(code => {
        expect(isValidCountryCode(code)).toBe(true);
      });
    });
  });

  describe('Country Lists Validation', () => {
    test('visited and pending countries do not overlap', () => {
      expect(arraysDoNotOverlap(visited_countries, pending_countries)).toBe(true);
    });

    test('country codes are lowercase', () => {
      [...visited_countries, ...pending_countries].forEach(code => {
        expect(code).toBe(code.toLowerCase());
      });
    });
  });
});
