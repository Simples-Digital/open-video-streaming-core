const { save } = require('../src/filewriter/writer');

test('expect to not throw error on saving video', () => {
  let user = 'user';
  let file = new File(['avi'], 'sample.avi', {
    type: 'video/avi',
  });

  expect(save(user, file)).toBeDefined();
});
