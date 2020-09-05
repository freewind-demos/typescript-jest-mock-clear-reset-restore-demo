describe('when calling mockReset()', () => {
  it('on a spy with custom implementation, it replaces the implementation to a new undefined-returning mock fn', () => {
    const module = {api: () => 'actual'}
    jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked');

    expect(module.api()).toBe('spy mocked');
    expect(module.api).toHaveBeenCalledTimes(1);

    (module.api as any).mockReset();

    expect(module.api()).toBe(undefined)
    expect(module.api).toHaveBeenCalledTimes(1)
  })

  it('on a non-spy with custom implementation, it replaces the implementation to a new undefined-returning mock fn', () => {
    const api = jest.fn(() => 'non-spy mocked');

    expect(api()).toBe('non-spy mocked');
    expect(api).toHaveBeenCalledTimes(1);

    (api as any).mockReset();

    expect(api()).toBe(undefined);
    expect(api).toHaveBeenCalledTimes(1);
  })
})
