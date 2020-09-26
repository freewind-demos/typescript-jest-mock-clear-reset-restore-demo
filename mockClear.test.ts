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
    const api = jest.fn(() => 'non-spy mocked');

    it('keeps implementation, clears calls', () => {
      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);

      api.mockClear();

      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);
    })
  })
})
