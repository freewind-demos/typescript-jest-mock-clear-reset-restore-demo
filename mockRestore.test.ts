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
    const api = jest.fn(() => 'non-spy mocked')
    it('clears implementation, clears calls', () => {
      expect(api()).toBe('non-spy mocked');
      expect(api).toHaveBeenCalledTimes(1);

      api.mockRestore();

      expect(api()).toBe(undefined);
      expect(api).toHaveBeenCalledTimes(1);
    })
  })

})
