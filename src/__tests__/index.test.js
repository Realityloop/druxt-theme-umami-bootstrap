import DruxtUmamiBootstrapModule from '..'

const mock = {
  addPlugin: jest.fn(),
  DruxtUmamiBootstrapModule
}

test('Nuxt module', () => {
  expect(() => { mock.DruxtUmamiBootstrapModule() }).toThrow('Druxt settings missing.')

  mock.options = {
    druxt: {}
  }
  mock.DruxtUmamiBootstrapModule()
  expect(mock.addPlugin).toHaveBeenCalled()
})
