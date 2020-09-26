import hello from "./hello";
import asMock from "./asMock";

jest.mock('./hello');

describe('mockClear', () => {
  describe('spy', () => {
    const module = {api: () => 'actual'}

    it('keeps implementation, clears calls', () => {
      jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked')

      expect(module.api()).toBe('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);

      (module.api as any).mockClear();

      expect(module.api()).toBe('spy mocked');
      expect(module.api).toHaveBeenCalledTimes(1);
    })
  })

  describe('mock', () => {
    const mockHello = asMock(hello);
    it('keeps implementation, clears calls', () => {
      mockHello.mockImplementation((a) => a.toUpperCase());

      expect(mockHello('aaa')).toBe('AAA');
      expect(mockHello).toHaveBeenCalledTimes(1);

      mockHello.mockClear();

      expect(mockHello('aaa')).toBe('AAA');
      expect(mockHello).toHaveBeenCalledTimes(1);
    })
  })
})
