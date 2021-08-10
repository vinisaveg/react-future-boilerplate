describe('Example test', () => {
  it('Should log a Hello test!', () => {
    const message = 'Hello test!'

    expect(message).toBe('Hello test!')
    expect(message).not.toBe('Hello world!')
  })
})
