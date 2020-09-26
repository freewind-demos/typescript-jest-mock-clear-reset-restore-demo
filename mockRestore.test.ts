import asMock from "./asMock";
import hello from "./hello";

jest.mock('./hello', () => jest.fn());

describe('mockRestore', () => {

  describe('spy', () => {
    const module = {api: () => 'actual'}
    it('restores implementation, clears calls', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked')

      expect(module.api()).toBe('spy mocked')
      expect(module.api).toHaveBeenCalledTimes(1);

      (module.api as any).mockRestore();

      expect(module.api()).toBe('actual')
      expect(module.api).not.toHaveProperty('mock')
    })
  })

  describe('mock', () => {
    const mockHello = asMock(hello);
    it('clears implementation, clears calls', () => {
      mockHello.mockImplementation((a) => a.toUpperCase());

      expect(mockHello('aaa')).toBe('AAA');
      expect(mockHello).toHaveBeenCalledTimes(1);

      mockHello.mockRestore();

      expect(mockHello('aaa')).toBeUndefined();
      expect(mockHello).toHaveBeenCalledTimes(1);
    })
  })

})
