describe('when calling mockRestore()', () => {
  it('on a non-spy mock with custom implementation, it resets the implementation to a new undefined-returning mock fn', () => {
    const api = jest.fn(() => 'non-spy mocked')

    expect(api()).toBe('non-spy mocked');
    expect(api).toHaveBeenCalledTimes(1);

    (api as any).mockRestore();

    expect(api()).toBe(undefined);
    expect(api).toHaveBeenCalledTimes(1);
  });

  it('on a spy with custom implementation, it resets the implementation to a new undefined-returning mock fn', () => {
    const module = { api: () => 'actual' }
    jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked')

    expect(module.api()).toBe('spy mocked')
    expect(module.api).toHaveBeenCalledTimes(1);

    (module.api as any).mockRestore();

    expect(module.api()).toBe('actual')
    expect(module.api).not.toHaveProperty('mock')
  })
})
