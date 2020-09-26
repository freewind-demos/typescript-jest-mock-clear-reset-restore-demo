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
    const api = jest.fn(() => 'non-spy mocked');
    it('clears implementation, clears calls', () => {
      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);

      api.mockReset();

      expect(api()).toBe(undefined);
      expect(api).toHaveBeenCalledTimes(1);
    })
  })
})
