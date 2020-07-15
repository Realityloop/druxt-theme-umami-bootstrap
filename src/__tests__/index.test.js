import DruxtThemeUmamiBootstrapModule from '..'

const mock = {
  addPlugin: jest.fn(),
  DruxtThemeUmamiBootstrapModule
}

test('Nuxt module', () => {
  expect(() => { mock.DruxtThemeUmamiBootstrapModule() }).toThrow('Druxt settings missing.')

  mock.options = {
    druxt: {}
  }
  mock.DruxtThemeUmamiBootstrapModule()
  expect(mock.addPlugin).toHaveBeenCalled()
})
