import hello from "./hello";
import asMock from "./asMock";

jest.mock('./hello', () => jest.fn());

describe('mockReset', () => {
  describe('spy', () => {
    const module = {api: () => 'actual'}
    it('clears implementation, clears calls', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');

      expect(module.api()).toBe('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);

      (module.api as any).mockReset();

      expect(module.api()).toBe(undefined)
      expect(module.api).toHaveBeenCalledTimes(1)
    })
  })
  describe('mock', () => {
    const mockHello = asMock(hello);
    it('clears implementation, clears calls', () => {
      mockHello.mockImplementation((a) => a.toUpperCase());
      expect(hello('aaa')).toBe('AAA');
      expect(mockHello).toHaveBeenCalledTimes(1);

      mockHello.mockReset();

      expect(hello('aaa')).toBe(undefined);
      expect(mockHello).toHaveBeenCalledTimes(1);
    })
  })
})
