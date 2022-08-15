import { convertCsvDataToJson, toCamelCase } from './utils';

describe('utils', () => {
  describe('convertCsvDataToJson', () => {
    const defaultInput = [['header1', 'header2', 'header3'], ['content1', 'content2', 'content3'], ['banana1', 'banana2', 'banana3']];

    it('returns a valid array', () => {
      const result = convertCsvDataToJson(defaultInput);
      const expected = [{ header1: 'content1', header2: 'content2', header3: 'content3' }, { header1: 'banana1', header2: 'banana2', header3: 'banana3' }];
      expect(result).toEqual(expected);
    });

    it('camelcases the keys', () => {
      const input = [['Header 1', 'header2', 'Header3'], ['content1', 'content2', 'content3'], ['banana1', 'banana2', 'banana3']];
      const expected = [{ header1: 'content1', header2: 'content2', header3: 'content3' }, { header1: 'banana1', header2: 'banana2', header3: 'banana3' }];
      const result = convertCsvDataToJson(input);
      expect(result).toEqual(expected);
    });
  });

  describe('toCamelCase', () => {
    it('converts single normal case word to camcelcase', () => {
      const input = 'Banana';
      const result = toCamelCase(input);
      expect(result).toEqual('banana');
    });

    it('converts multiple normal case words to camcelcase', () => {
      const input = 'Banana split';
      const result = toCamelCase(input);
      expect(result).toEqual('bananaSplit');
    });
  });
});
